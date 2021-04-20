const router = module.exports = require('express').Router()

const selectUnit = require('./select')
const viewUnit = require('./view')

router.get('/', selectUnit.view)
router.post('/', selectUnit.submit)

router.get('/:uuid', viewUnit.view)
router.post('/:uuid', viewUnit.submit)
