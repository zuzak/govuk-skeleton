const axios = require('axios')
const config = require('./config')

const generateClient = (service) => axios.create({
    baseURL: config.get(`endpoint.${service}.url`)
})

module.exports = {
    info: generateClient('info')
}

console.log(config.get('endpoint.info.url'))