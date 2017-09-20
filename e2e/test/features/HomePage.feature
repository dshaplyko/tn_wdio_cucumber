Feature: Login Feature
As a user I want to be able to view a home page

Scenario: Checking elements on the Home Page
  Given I am on "home" page
  
  When I click get started button
  Then I should be on registration page

  When I press browser's back button
    And I click login button on the page
  Then I should be on login page

  When I press browser's back button 
    And I click sign up button
  Then I should be on registration page