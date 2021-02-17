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
  } catch (err) {
    next(err);
  }
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
        .then(res.redirect("/profile"))
        .catch((err) => next(err));
    } else {
      res.redirect("/profile");
    }
  } catch (err) {
    next(err);
  }
});

router.post("/movie/:id/watched", checkLoggedIn, async (req, res, next) => {
  const userID = req.session.passport.user;

  try {
    const movie = await Movie.findOne({ api_id: req.params.id });
    const user = await User.findById(userID);
    if (!user.watchedMovies.includes(movie.id)) {
      const updatedUserMovies = [...user.watchedMovies, movie.id];
      User.findByIdAndUpdate(
        userID,
        {
          watchedMovies: updatedUserMovies,
          pendingMovies: user.pendingMovies.filter(
            (pendingMovie) => pendingMovie != movie.id
          )
        },
        { omitUndefined: true }
      )
        .then(res.redirect("/profile"))
        .catch((err) => next(err));
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
