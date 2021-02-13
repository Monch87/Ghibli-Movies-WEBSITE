const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// User signup
router.get("/signup", (req, res) => res.render("auth/signup"));

router.post("/signup", (req, res, next) => {
  const { name, username, password } = req.body;

  if (username === "" || password === "") {
    res.render("auth/signup", { errorMsg: "Fill the blanks" });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (user) {
        res.render("auth/signup", { errorMsg: "User already exits" });
        return;
      }

      // Validación pwd

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({ name, username, password: hashPass })
        .then(() => res.redirect("/"))
        .catch((error) =>
          res.render("auth/signup", { errorMsg: "Server error" })
        );
    })
    .catch((error) => next(new Error(error)));
});

// User login
router.get("/login", (req, res) =>
  res.render("auth/login", { errorMsg: req.flash("error") })
);

router.post(
  "/login",
  //   (req, res) => res.send(req.body)
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

// User logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
