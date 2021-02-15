const express = require('express')
const router = express.Router()


// Endpoints
router.get('/', (req, res) => res.render('index'))


const { checkLoggedIn, checkRole } = require('./../middleware')
const { isAdmin } = require('./../utils')

router.get('/profile', checkLoggedIn, (req, res) => res.render('profile', { user: req.user }))


module.exports = router
