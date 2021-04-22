const { client } = require('nightwatch-api')
const { Given, Then, When } = require('@cucumber/cucumber')

Then('the heading is {string}', title => {
  return client.assert.containsText('h1', title)
})

Then('the GOV.UK logo exists', () => {
  return client.assert.visible('.govuk-header__logo')
})

Then('there is a {string} button', (label) => {
  // Write code here that turns the phrase above into concrete actions
  return client.assert.containsText('button.govuk-button', label)
})

When('I click {string}', (selector) => {
  return client.click(selector)
})

Given('I type gibberish into {string}', (selector) => {
  return client.setValue(selector, Math.random().toString(36).substring(2)) // e.g. 7n972jcnd2o
})

Then('the typeahead says {string}', (contents) => {
  return client.assert.containsText('.autocomplete__menu', contents)
})

When('I click away', () => client.click('html'))

Then('the {string} field is {string}', function (selector, value) {
  return client.assert.value(selector, value)
});

Given('I type {string} into {string}', function (value, selector) {
  return client.setValue(selector, value)
});

Then('I click the button', () => client.click('button'))

Then('the URL contains {string}', (string) => client.assert.urlContains(string))

Then('the URL is {string}', (string) => client.assert.urlEquals(string))

Then('I should get an error', () => client.assert.visible('.govuk-error-summary'))

Then('the {string} error should be {string}', function (field, text) {
  return client.assert.containsText(`#${field}-error`, text)
});
