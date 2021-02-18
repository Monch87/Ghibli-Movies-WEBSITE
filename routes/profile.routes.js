const express = require("express");
const router = express.Router();
const axios = require("axios");

const User = require("../models/user.model");
const cdnUpload = require("../configs/cloudinary.config");

const { checkLoggedIn } = require("./../middleware");

router.get("/", checkLoggedIn, async (req, res, next) => {
  const userID = req.session.passport.user;
  try {
    const user = await User.findById(userID)
      .populate("pendingMovies")
      .populate("watchedMovies");
    const watchedMovies = await Promise.all(
      user.watchedMovies.map(async (movie) => {
        const response = await axios.get(
          `https://ghibliapi.herokuapp.com/films/${movie.api_id}`
        );
        const title = response.data.title;
        return { api_id: movie.api_id, image: movie.image, title };
      })
    );
    const pendingMovies = await Promise.all(
      user.pendingMovies.map(async (movie) => {
        const response = await axios.get(
          `https://ghibliapi.herokuapp.com/films/${movie.api_id}`
        );
        const title = response.data.title;
        return { api_id: movie.api_id, image: movie.image, title };
      })
    );
    res.render("profile/profile", { user, pendingMovies, watchedMovies });
  } catch (err) {
    next(err);
  }
});

// User edit
router.get("/:user_id/edit", (req, res, next) => {
  const user_id = req.params.user_id;

  User.findById(user_id)
    .then((user) => res.render("profile/edit", user))
    .catch((err) => next(err));
});

router.post(
  "/:user_id/edit",
  cdnUpload.single("imageFile"),
  (req, res, next) => {
    const { username, name } = req.body;

    const user_id = req.params.user_id;
    const newUser = { username, name };
    if (req.file) newUser.avatar = req.file.path;

    User.findByIdAndUpdate(user_id, newUser, { omitUndefined: true, new: true })
      .then((user) => res.redirect("/profile"))
      .catch((err) => next(err));
  }
);

module.exports = router;
