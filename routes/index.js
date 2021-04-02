const router = module.exports = require('express').Router()

const health = require('./health')
router.use('/health', health)

const form = require('./form')
router.use('/form', form)

router.get('/', (req, res) => res.render('template'))

router.get('/text', require('./form/text').view)
router.post('/text', require('./form/text').submit)

// the error pages route must be last
const errorPages = require('./errorpages')
router.use('/', errorPages)
