@Run
Feature: Registration Feature
As a user I want to be able to register a new user

Scenario: 1. Verifying items on Registration page
  Given I am on 'registration' page
  Then the 'First name field' is visible on the registration page
    And the 'Last name field' is visible on the registration page
    And the 'Email field' is visible on the registration page
    And the 'User name field' is visible on the registration page
    And the 'Password field' is visible on the registration page
    And the 'Birthday field' is visible on the registration page
    And the 'Register button' is visible on the registration page

Scenario: 2. Verifying items on Registration page
  Given I am on 'registration' page
  When I click Sign in button on the registration page
  Then 'Login' page should be opened