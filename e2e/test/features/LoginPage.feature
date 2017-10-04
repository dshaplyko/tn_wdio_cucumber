Feature: Login Feature
As a user I want to be able to login using valud credentials

Scenario: Verifying items on Login page
  Given I am on 'login' page
  Then 'Login field' on the 'login' page should be visible
    And 'Password' on the 'login' page should be visible
    And 'Register button' on the 'login' page should be visible
    And Text of welcome message should be "Welcome Back"

Scenario: Logging to the application
  Given I am on 'login' page
  When I enter credentials
    And I wait until main page is loaded
  Then I should be on main page
    
Scenario: Logging in with incorrect credentials
  Given I am on 'login' page
  When I enter "test@test.ru" in username field
    And I enter "12345" in password field
    And I click 'login' link on the login page
    And I wait until modal appears
  Then Error message should be displayed
    And Text of error message should be "Incorrect username or password."
  When I click OK button in modal

Scenario: Clicking on Register link
  Given I am on 'login' page
  When I click 'register' link on the login page
    And I wait until registration page is loaded
  Then I should be on registration page