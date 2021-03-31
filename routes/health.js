const router = module.exports = require('express').Router()

router.get('/liveness', (req, res) => req.json('ok'))
