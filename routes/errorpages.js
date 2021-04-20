const router = module.exports = require('express').Router()
const config = require('../config')

router.use((req, res, next) => res.status(404).render('errorpages/not-found.njk'))

router.get('/500', (req, res) => { throw new Error('error') })

router.use((err, req, res, next) => {
  res.status(500)
  res.locals.development = config.get('env') === 'development'
  res.render('errorpages/problem-with-service.njk', { err })
})
