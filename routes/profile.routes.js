const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user.model");


// User profile 
router.get('/login', (req, res) => {

    const user_id = req.params.user_id

    User
        .findById(user_id)
        .then(user => res.render('profile', user))
        .catch(err => console.log(err))
})


// User edit
router.get('/:user_id/edit', (req, res) => {

    const user_id = req.params.user_id

    User
        .findById(user_id)
        .then(user => res.render('edit', user))
        .catch(err => console.log(err))
 })
router.post('/:user_id/edit', (req, res) => {

    const { username, name } = req.body  //profileImg
    const user_id = req.params.user_id
    console.log(username, user_id, name)
    console.log(req.body)

    User
        .findByIdAndUpdate(user_id, { username, name })  //profileImg
        .then(user => res.redirect('/profile'))
        .catch(err => console.log(err))
    
})


module.exports = router;
