@Test
Feature: Login Feature
As a user I want to be able to login using valud credentials

Scenario: Verifying items on Login page
  Given I am on 'login' page
  Then the 'Email field' is visible on the login page
    And the 'Password field' is visible on the login page
    And the 'Sign up button' is visible on the login page
    And Text of welcome message should be "Welcome Back"

Scenario: Logging to the application
  Given I am on 'login' page
  When I enter credentials
  Then 'Main' page should be opened
    
Scenario: Logging in with incorrect credentials
  Given I am on 'login' page
  When I enter "test@test.ru" in username field
    And I enter "12345" in password field
    And I click Login button on the login page
  Then Error message should be displayed
    And Text of error message should be "Incorrect username or password."
 # When I click OK button in modal

Scenario: Clicking on Register link
  Given I am on 'login' page
  When I click Sign up button on the login page
  Then 'Registration' page should be opened