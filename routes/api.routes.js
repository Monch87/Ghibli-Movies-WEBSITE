const express = require("express");
// const axios = require("axios");
const router = express.Router();
const { matchFilm } = require("../utils");
const apiHandler = require("../services");

router.get("/search", (req, res, next) => {
  const GhibliApi = new apiHandler();

  GhibliApi.getAllFilms()
    .then((response) => {
      const titleArray = response.data.map(({ id, title }) => ({ id, title }));
      res.json(matchFilm(titleArray, req.query.title));
    })
    .catch((err) => next(err));
});

module.exports = router;
