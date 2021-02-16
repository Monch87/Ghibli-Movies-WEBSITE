const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user.model");
const cdnUpload = require('../configs/cloudinary')


// User profile 
router.get('/login', (req, res) => {

    const user_id = req.params.user_id

    User
        .findById(user_id)
        .then(user => res.render('profile', user))
        .catch(err => console.log(err))
})


router.get('/:user_id', (req, res) => {

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
        .then(user => { 
          console.log(user)  
          res.render('edit', user)
}   )
        .catch(err => console.log(err))
 })




router.post('/:user_id/edit', cdnUpload.single('imageFile'), (req, res) => {

    const { username, name } = req.body 
    
    const { path } = req.file ? req.file : undefined
    const user_id = req.params.user_id


    User
        .findByIdAndUpdate(user_id, { username, name, avatar:path }, {omitUndefined:true, new:true} )  
        .then(user => { console.log (user)
            res.redirect('/profile')})
        .catch(err => console.log(err))
    
})


module.exports = router;
