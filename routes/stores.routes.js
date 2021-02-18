const express = require("express");
const router = express.Router();

// Endpoints
router.get("/", (req, res) =>
  res.render("pages/stores", { apiKey: process.env.API_KEY })
);

module.exports = router;
