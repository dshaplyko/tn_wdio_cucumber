Feature: Registration Feature
As a user I want to be able to register a new user

Scenario: Verifying items on Registration page
  Given I am on "registration" page
  Then First name field should be visible
    And Last name field should be visible
