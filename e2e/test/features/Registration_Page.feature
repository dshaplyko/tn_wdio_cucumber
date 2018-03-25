@Run
Feature: Registration Feature
As a user I want to be able to register a new user

Background: Registration tests
  Given I am on 'registration' page

Scenario: 1. Verifying items on Registration page
  Then the 'First name field' is visible on the registration page
    And the 'Last name field' is visible on the registration page
    And the 'Email field' is visible on the registration page
    And the 'User name field' is visible on the registration page
    And the 'Password field' is visible on the registration page
    And the 'Birthday field' is visible on the registration page
    And the 'Register button' is visible on the registration page
    And Text of welcome message on the registration page should be "Welcome Back"


Scenario: 2. Clicking sign in link on the Registration page
  When I click Sign in button on the registration page
  Then 'Login' page should be opened

Scenario: 3. Filling required fields on the Registration page
  When I enter "Dmitry" in first name field on the registration page
    And I enter "test@test.ru" in email field on the registration page
    And I enter "WeDoMore" in user name field on the registration page
    And I enter "12345" in password field on the registration page
  Then the 'Register button' becomes active on the registration page