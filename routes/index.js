const router = module.exports = require('express').Router()
router.get('/liveness', (req, res) => res.json('ok'))

const health = require('./health')
router.use('/health', health)

const form = require('./form')
router.use('/form', form)

router.get('/', (req, res) => res.render('template'))
