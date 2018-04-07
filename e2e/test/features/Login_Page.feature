@Run
Feature: Login Feature
As a user I want to be able to login using valud credentials

Background: Login tests
  Given I am on 'login' page

Scenario: 1. Verifying items on Login page
  Then the 'Email field' is visible on the login page
  And the 'Password field' is visible on the login page
  And the 'Sign up button' is visible on the login page
  And Text of welcome message on the login page should be "Welcome Back"

Scenario: 2. Logging to the application
  When I enter "test@test.ru" in email field on the login page
  And I enter "password" in password field on the login page
  And I click Login button on the login page
  Then 'Main' page should be opened
    
Scenario: 3. Logging in with incorrect credentials
  When I enter "test@test.ru" in email field on the login page
  And I enter "12345" in password field on the login page
  And I click Login button on the login page
  Then Alert message should be displayed
  And Text of the alert message should be "Incorrect username or password."

Scenario: 4. Clicking on Register link
  When I click Sign up button on the login page
  Then 'Registration' page should be opened