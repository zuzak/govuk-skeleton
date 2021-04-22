Feature: Homepage

Scenario: Heading

  Given I open "/"
  Then the heading is "Default page template"
  And the GOV.UK logo exists
