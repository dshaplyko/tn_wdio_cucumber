@Run 
Feature: Header Feature
As a user I want to be able to view a Header
on every page within the application

Scenario Outline: 1. Verifying header's items for non-logged in user on the <page> page
  Given I am on <page> page
  Then the 'Login' button is visible in the header
    And the 'Sign up' button is visible in the header
    And the Logo is visible in the header

    Examples:
    | page           | 
    | 'Login'        | 
    | 'Registration' | 
    | 'Main'         |
    | 'Home'         |

@Login 
Scenario: 2. Verifying header's items for logged in user
  Given 'Main' page should be opened
  Then the 'Login' button is not visible in the header
  And the 'Sign up' button is not visible in the header
  And the Logo is visible in the header

Scenario Outline: 3. Clicking on the Logo from the <page> page
  Given I am on <page> page
  When I click on the Logo
  Then 'Main' page should be opened

    Examples:
    | page           | 
    | 'Login'        | 
    | 'Registration' | 
    | 'Home'         |
    | 'Main'         |
