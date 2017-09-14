Feature: Login Feature
As a user I want to be able to login using valud credentials

@main
Scenario: Logging to the application
  Given I am on login page
  When I enter credentials
    And I wait until main page is loaded
  Then I should be on main page