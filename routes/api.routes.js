const express = require("express");
const axios = require("axios");
const router = express.Router();
const { matchFilm } = require("../utils");

router.get("/search", (req, res, next) => {
  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
      const titleArray = response.data.map(({ id, title }) => ({ id, title }));
      res.json(matchFilm(titleArray, req.query.title));
    })
    .catch((err) => next(err));
});

module.exports = router;
