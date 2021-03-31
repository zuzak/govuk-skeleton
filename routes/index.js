const router = module.exports = require('express').Router()
router.get('/liveness', (req, res) => res.json('ok'))

const health = require('./health')
router.use('/health', health)

router.get('/', (req, res) => res.render('template'))