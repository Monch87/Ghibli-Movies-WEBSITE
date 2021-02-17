const { default: axios } = require("axios");
const express = require("express");
const { checkLoggedIn } = require("./../middleware");

const Movie = require("../models/movie.model");
const Rating = require("../models/rating.model");
const User = require("../models/user.model");
const router = express.Router();

// Endpoints
router.get("/movie/:id", async (req, res, next) => {
  try {
    const dbMovie = await Movie.findOne({ api_id: req.params.id });
    const apiMovie = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${req.params.id}`
    );
    const { image, ratings } = dbMovie;
    const { data } = apiMovie;
    res.render("movie-details", { image, ratings, data });
    console.log(image);
    console.log(data);
  } catch (err) {
    next(err);
  }
});

router.post("/movie/:id/edit", checkLoggedIn, async (req, res, next) => {
  const userID = req.session.passport.user;
  const movieID = req.params.id;

  // Movie.findOne({ api_id: movieID })
  //   .then((movie) => res.send(movie))
  //   .catch((err) => next(err));
});

router.post("/movie/:id/pending", checkLoggedIn, async (req, res, next) => {
  const userID = req.session.passport.user;

  try {
    const movie = await Movie.findOne({ api_id: req.params.id });
    const user = await User.findById(userID);
    if (!user.pendingMovies.includes(movie.id)) {
      const updatedUserMovies = [...user.pendingMovies, movie.id];
      User.findByIdAndUpdate(
        userID,
        { pendingMovies: updatedUserMovies },
        { omitUndefined: true }
      )
        .then(res.send("updated"))
        .catch((err) => next(err));
    }
    res.redirect("/profile");
  } catch (err) {
    next(err);
  }
});
// router.get("/test", (req, res, next) => {
//   // Rating.create({
//   //   user: "602a89df759213597da46397",
//   //   movie: "602bdf43959210154e4f1b62",
//   //   rating: 4
//   // })
//   //   .then((response) => console.log(response))
//   //   .catch((err) => console.log(err));
//   Movie.findById("602bdf43959210154e4f1b62")
//     .populate("ratings")
//     .then((movie) => res.send(movie))
//     .catch((err) => next(err));
// });
module.exports = router;
