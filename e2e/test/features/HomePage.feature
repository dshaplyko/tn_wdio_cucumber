@Run 
Feature: Home Feature
As a user I want to be able to view a home page

Scenario Outline: Clicking buttons on the Home Page
  Given I am on 'Home' page
  When I click <button> button
  Then <page> page should be opened

    Examples:
    | button        | page           |
    | 'get started' | 'Registration' |
    | 'login'       | 'Login'        |
    | 'sign up'     | 'Registration' |