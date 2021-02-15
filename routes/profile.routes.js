const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user.model");



// User profile
// router.get('/login', (req, res) => {
//     User
//         .find()
//         .then(users => {
//             res.render('profile', { users })
//         })
//         .catch(err => console.log(err))
// })



// User profile and edit
router.get('/login', (req, res) => {

    const user_id = req.params.user_id

    User
        .findById(user_id)
        .then(user => res.render('profile', user))
        .catch(err => console.log(err))
})

router.post('profile', (req, res) => {

    const { username, name, profileImg, description } = req.body
    const user_id = req.params.user_id

    User
        .findByIdAndUpdate(user_id, { username, name, profileImg, description })
        .then(user => res.redirect(`/all-users/${user._id}`))
        .catch(err => console.log(err))
})


module.exports = router;
