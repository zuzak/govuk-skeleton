const { client } = require('nightwatch-api')
const { Given, Then, When } = require('@cucumber/cucumber')

Given(/^I open "([^"]*)"$/, (path) => {
  return client.url('http://localhost:3000' + path).waitForElementVisible('body', 1000)
})
