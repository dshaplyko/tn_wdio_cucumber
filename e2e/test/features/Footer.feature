@Run 
Feature: Footer Feature
As a user I want to be able to view a Footer
on every page within the application

Scenario Outline: 1. Verifying footer's items on the <page> page
  Given I am on <page> page
  Then the 'Main Page' link is visible in the footer
    And the 'Last Notes' link is visible in the footer
    And the 'Skyscanner' link is visible in the footer
    And the 'Eightydays.Me' link is visible in the footer
    And the Logo is visible in the footer

    Examples:
    | page           | 
    | 'Login'        | 
    | 'Registration' | 
    | 'Main'         |
    | 'Home'         |