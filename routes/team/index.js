const router = module.exports = require('express').Router()

const selectTeam = require('./select')
const viewTeam = require('./view')

router.get('/', selectTeam.view)
router.post('/', selectTeam.submit)

router.get('/:uuid', viewTeam.view)
router.post('/:uuid', viewTeam.submit)
