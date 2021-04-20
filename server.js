#!/usr/bin/env node
const express = require('express')
const app = module.exports = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

const config = require('./config.js')

const configureTemplating = require('./templating')
configureTemplating(app)

const cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['squeamish ossifrage'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(require('connect-flash')())

/* set default file extension for views: */
app.set('view engine', 'njk')
// this must be before the routes:
app.use(express.static('public'))

const routes = require('./routes')
app.use(routes)

const server = app.listen(
  config.get('server.port'),
  config.get('server.host'),
  () => console.log('Listening')
)

process.on('SIGTERM', () => server.close())
