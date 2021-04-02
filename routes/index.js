const router = module.exports = require('express').Router()

const health = require('./health')
router.use('/health', health)

const form = require('./form')
router.use('/form', form)

router.get('/', (req, res) => res.render('template'))

// the error pages route must be last
const errorPages = require('./errorpages')
router.use('/', errorPages)