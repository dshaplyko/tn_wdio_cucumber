Feature: Registration Feature
As a user I want to be able to register a new user

Scenario: Verifying items on Registration page
  Given I am on 'registration' page
  Then 'First name' on the 'registration' page should be visible
    And 'Last name' on the 'registration' page should be visible
    And 'Email' on the 'registration' page should be visible
    And 'Username' on the 'registration' page should be visible
    And 'Password' on the 'registration' page should be visible
    And 'Birthday' on the 'registration' page should be visible
    And 'Register button' on the 'registration' page should be visible

Scenario: Verifying items on Registration page
  Given I am on 'registration' page
  When I click sign in button
  Then I should be on login page
