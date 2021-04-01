#!/usr/bin/env node

const nunjucks = require('nunjucks')
const path = require('path') // nodejs core

const express = require('express')
const app = module.exports = express()

const config = require('./config.js')

const routes = require('./routes')
app.use(routes)

/* configure templates: */
nunjucks.configure([
  path.join('node_modules', 'govuk-frontend'),
  'views'
], {
  express: app,
  watch: config.get('templating.watch'),
  noCache: !config.get('templating.cache')
})

/* set default file extension for views: */
app.set('view engine', 'njk')
app.use(express.static('public'))

const server = app.listen(
  config.get('server.port'),
  config.get('server.host'),
  () => console.log('Listening')
)

process.on('SIGTERM', () => server.close())
