Feature: Login Feature

Scenario: Logging to the application
  Given I am on login page
  When I enter credentials
  Then I should be on main page