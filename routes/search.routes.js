const { default: axios } = require("axios");
const express = require("express");
//const uploadCloud = require("../configs/cloudinary.config");
const Movie = require("../models/movie.model");
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

  //   axios
  //     .get(`https://ghibliapi.herokuapp.com/films/${req.params.id}`)
  //     .then((response) => res.send(response.data))
  //     .catch((err) => next(err));
});
module.exports = router;
