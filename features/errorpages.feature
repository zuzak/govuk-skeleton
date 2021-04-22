Feature: Error pages

Scenario: 404 page

  Given I open "/404"
  Then the heading is "Page not found"
  And the GOV.UK logo exists
