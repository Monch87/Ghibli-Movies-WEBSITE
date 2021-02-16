const express = require("express");
const uploadCloud = require("../configs/cloudinary.config");
const router = express.Router();

// Endpoints
router.get("/movie/:id", (req, res) => res.send("movie details"));
module.exports = router;
