@Test 
Feature: Main Feature
As a user I want to be able to navigate and use the Main page

Scenario: 1. Verifying items on Main page
   Given I am on 'main' page
   Then the list of notes should be displayed
   And each of note entry has 'title'
   And each of note entry has 'substile'

Scenario: 2. Opening a note item
   Given I am on 'main' page
   Then the list of notes should be displayed
   When I click on the random note item
   Then 'Note' page should be opened


   