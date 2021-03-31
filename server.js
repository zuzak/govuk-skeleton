#!/usr/bin/env node

const nunjucks = require('nunjucks')
const path = require('path') // nodejs core

const express = require('express')
const app = module.exports = express()

const isDev = process.env.ENV === 'development'

const routes = require('./routes')
app.use(routes)

/* configure templates: */
nunjucks.configure([
    path.join('node_modules', 'govuk-frontend'),
    'views'
], {
    express: app,
    watch: isDev,
    noCache: isDev
})
/* set default file extension for views: */
app.set('view engine', 'njk')
app.use(express.static('public'))

const server = app.listen(
    process.env.PORT || 3000,
    process.env.HOST || undefined,
    () => console.log('Listening')
)