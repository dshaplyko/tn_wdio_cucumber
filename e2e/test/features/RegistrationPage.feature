Feature: Registration Feature
As a user I want to be able to register a new user

Scenario: Verifying items on Registration page
  Given I am on "registration" page
  Then First name field on the registration should be visible
    And Last name field on the registration should be visible
    And Email field on the registration should be visible
    And Username field on the registration should be visible
    And Password field on the registration should be visible
    And Birthday field on the registration should be visible
    And Register button on the registration should be visible

Scenario: Verifying items on Registration page
  Given I am on "registration" page
  When I click sign in button
  Then I should be on login page
