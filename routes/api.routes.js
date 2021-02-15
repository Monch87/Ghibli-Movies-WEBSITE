const express = require("express");
const axios = require("axios");
const router = express.Router();
const { matchFilm } = require("../utils");

router.get("/", (req, res) => {
  //res.send(req.query);
  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then((response) => {
      res.send(response.data);
      const filmsTitle = response.data.map((movie) => {
        movie.title;
      });
      //bb = matchFilm(filmsTitle, req.query.title);
      //res.send(bb);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
