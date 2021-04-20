const config = require('./config')
const nunjucks = require('nunjucks')
const path = require('path') // nodejs core

module.exports = (app) => {
  const njkEnv = nunjucks.configure([
    path.join('node_modules', 'govuk-frontend'),
    'views'
  ], {
    express: app,
    watch: config.get('templating.watch'),
    noCache: !config.get('templating.cache'),
    throwOnUndefined: config.get('templating.throwOnUndefined'),
    trimBlocks: true
  })

  /* set default file extension for views: */
  app.set('view engine', 'njk')

  /**
   * Taken from Ministry of Justice codebase
   * Crown Copyright / MIT https://git.io/JYior
   */

  njkEnv.addFilter('findError', (errors, field) => {
    const item = errors.find(error => error.href === `#${field}`)
    if (item) {
      return {
        text: item.text
      }
    }
    return null
  })

  njkEnv.addFilter('findErrors', (errors, formFieldIds) => {
    const fieldIds = formFieldIds.map(field => `#${field}`)
    const errorIDs = errors.map(error => error.href)
    const firstPresentFieldError = fieldIds.find(fieldId => errorIDs.includes(fieldId))
    if (firstPresentFieldError) {
      return {
        text: errors.find(error => error.href === firstPresentFieldError).text
      }
    }
    return null
  })
  return app
}
