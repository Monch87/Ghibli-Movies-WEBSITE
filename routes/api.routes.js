const express = require("express");
const axios = require("axios");
const router = express.Router();
const { matchFilm } = require("../utils");

router.get("/search", (req, res) => {
  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then((response) => {
      const titleArray = [];
      response.data.forEach((movie) => {
        const movieData = { id: movie.id, title: movie.title };
        titleArray.push(movieData);
      });
      res.send(matchFilm(titleArray, req.query.title));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
