const express = require("express");
const router = express.Router();

// Endpoints
router.get("/", (req, res) =>
  res.render("stores", { apiKey: process.env.API_KEY })
);

module.exports = router;
