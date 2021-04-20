const convict = require('convict')

// These should all be sensible production defaults
// For the defaults when in development mode check config/development.json
module.exports = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'development', 'test'],
    default: 'production',
    env: 'NODE_ENV'
  },
  server: {
    port: {
      doc: 'The port to bind',
      format: 'port',
      default: 3000,
      env: 'PORT',
      arg: 'port'
    },
    host: {
      doc: 'The IP to bind',
      default: 'localhost',
      env: 'HOST',
      arg: 'host'
    }
  },
  templating: {
    watch: {
      doc: 'Whether to watch templates for changes',
      format: Boolean,
      default: false,
      arg: 'watch'
    },
    cache: {
      doc: 'Whether to cache templates',
      format: Boolean,
      default: false,
      args: 'cache'
    },
    throwOnUndefined: {
      doc: 'Whether to throw errors when outputting a null/undefined value',
      format: Boolean,
      default: false
    }
  },
  endpoint: {
    info: {
      url: {
        doc: 'URL of the info-service',
        format: URL,
        env: 'INFO_SERVICE',
        default: 'http://localhost:8085'
      }
    }
  }
})
