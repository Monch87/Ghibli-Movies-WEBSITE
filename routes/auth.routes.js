const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/user.model")

const bcrypt = require("bcrypt")
const bcryptSalt = 10



// User signup
router.get("/signup", (req, res) => res.render("auth/signup"))

router.post("/signup", (req, res, next) => {

    const { name, nickname, password } = req.body

    if (nickname === "" || password === "") {
        res.render("auth/signup", { errorMsg: "Fill the blanks" })
        return
    }

    User
        .findOne({ nickname })
        .then(user => {

            if (user) {
                res.render("auth/signup", { errorMsg: "User already exits" })
                return
            }

            // Validación pwd

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ name, nickname, password: hashPass })
                .then(() => res.redirect("/"))
                .catch((error) => res.render("auth/signup", { errorMsg: "Server error" }))
        })
        .catch(error => next(new Error(error)))
})



// User login
router.get("/login", (req, res) => res.render("auth/login", { errorMsg: req.flash("error") }))

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
}))


// // User logout
// router.get("/cerrar-sesion", (req, res) => {
//     req.logout();
//     res.redirect("/iniciar-sesion");
// });

module.exports = router