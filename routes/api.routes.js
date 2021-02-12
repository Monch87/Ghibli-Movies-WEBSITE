const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')

router.get('/places', (req, res) => {

Place
    .find()
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

module.exports = router