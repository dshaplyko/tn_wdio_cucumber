@Run 
Feature: Note Feature
As a user I want to be able to navigate and use the Profile's page

@Login
Scenario: 1. Opening the Profile Page
  Given 'Main' page should be opened
  When I click on on the menu button
  And I click 'Edit profile link' from the Side Menu
  Then 'Profile' page should be opened
  And the text of the header should be 'User Profile'