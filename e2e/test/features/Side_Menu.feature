@Run 
Feature: Side Menu Feature
As a user I want to be able to view a side menu
on every page within the application

Scenario Outline: 1. Verifying side menu's items for non-logged in users
  Given I am on <page> page
  When I click on on the menu button
  Then the Side Menu is visible
    And the 'News link' is visible in the Side Menu
    And the 'Gallery link' is visible in the Side Menu
    And the 'Main page link' is visible in the Side Menu
    And the 'Map link' is visible in the Side Menu
    And the 'Logout button' is not visible in the Side Menu
    And the 'Edit profile link' is not visible in the Side Menu
  
    Examples:
    | page           | 
    | 'Login'        | 
    | 'Registration' | 
    | 'Main'         |
    | 'Home'         |

Scenario: 1. Verifying side menu's items for logged in users
  Given I am on 'login' page
  When I enter credentials
  Then 'Main' page should be opened

  When I click on on the menu button
  Then the Side Menu is visible
    And the 'News link' is visible in the Side Menu
    And the 'Gallery link' is visible in the Side Menu
    And the 'Main page link' is visible in the Side Menu
    And the 'Map link' is visible in the Side Menu
    And the 'Logout button' is visible in the Side Menu
    And the 'Edit profile link' is visible in the Side Menu