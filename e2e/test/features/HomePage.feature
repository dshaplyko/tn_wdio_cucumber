@Run 
Feature: Login Feature
As a user I want to be able to view a home page

Scenario: Checking elements on the Home Page
  Given I am on 'Home' page
  
  When I click 'get started' button
  Then 'Registration' page should be opened

  When I press browser's back button
    And I click 'login' button
  Then 'Login' page should be opened

  When I press browser's back button 
    And I click 'sign up' button
  Then 'Registration' page should be opened