const router = module.exports = require('express').Router()

router.get('/:name', (req, res) => res.render(`form/${req.params.name}.njk`))