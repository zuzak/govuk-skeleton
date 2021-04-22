Feature: Unit select

Background:
  Given I open "/unit"

Scenario: Headers
  Then the heading is "Which unit do you want to view?"
  And there is a "Continue" button
  And the GOV.UK logo exists

Scenario: Typeahead nonsense
  When I type gibberish into "#unit"
  Then the typeahead says "No results found"

Scenario: Typeahead clickaway
  When I type "Press" into "#unit"
  And I click away
  Then the "#unit" field is "Press Office"

Scenario: Team goes to right place
  When I type "MTS" into "#unit"
  And I click the button
  Then the URL contains "/unit/6718d176-8310-4c8e-9a57-a3cd3b7164de"

Scenario: Error on bad unit
  When I type gibberish into "#unit"
  And I click the button
  Then I should get an error
  And the "unit" error should be "Choose a unit"

Scenario: Error on no unit
  When I click the button
  Then I should get an error
  And the "unit" error should be "Choose a unit"
