const { default: axios } = require("axios");
const express = require("express");
const { checkLoggedIn } = require("./../middleware");

const Movie = require("../models/movie.model");
const Rating = require("../models/rating.model");
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
  Movie.findOne({ api_id: movieID })
    .then((movie) => res.send(movie))
    .catch((err) => next(err));
});
module.exports = router;
