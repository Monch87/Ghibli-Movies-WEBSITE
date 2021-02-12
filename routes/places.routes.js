const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Place = require('../models/place.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))
//router.get('/map', (req, res) => res.render('basic-map'))



//FIND PLACE
router.get('/list-places', (req, res) => {

  Place
    .find()
    .then(places => {
      res.render('list', { places })
    })
    .catch(err => console.log(err))
})




// //CREATE NEW PLACE
router.get('/create-new-place', (req, res) => res.render('new'))

router.post('/create-new-place', (req, res, next) => {

console.log(req.body)

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/list-places'))
    .catch(err => next(new Error(err)))
})



//EDIT PLACE
router.get('/edit/:place_id', (req, res, next) => {

  const place_id = req.params.place_id

  Place
    .findById(place_id)
    .then(place => res.render('edit', place))
    .catch(err => next(new Error(err)))
})

router.post('/edit/:place_id', (req, res, next) => {

  const { name, type, latitude, longitude } = req.body
  const place_id = req.params.place_id

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .findByIdAndUpdate(place_id, { name, type, location })
    .then(place => res.redirect('/list-places'))
    .catch(err => next(new Error(err)))
})




//DELETE PLACE
router.post('/place/:place_id/delete', (req, res, next) => {

  const place_id = req.params.place_id

  Place
    .findByIdAndRemove(place_id)
    .then(place => res.redirect('/list-places'))
    .catch(err => next(new Error(err)))
})




module.exports = router
