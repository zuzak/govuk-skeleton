const router = module.exports = require('express').Router()
const client = require('../client')

router.get('/text', (req, res) => res.render('form/text.njk'))

