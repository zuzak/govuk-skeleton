const router = module.exports = require('express').Router()

router.get('/liveness', (err, req, res) => req.json('ok'))