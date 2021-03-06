@Run
Feature: Main Feature
As a user I want to be able to navigate and use the Main page

Scenario: 1. Verifying items on Main page as a visitor
   Given I am on 'main' page
   Then the list of notes should be displayed
   And the 'Filter' element is existing on the Main page
   And the 'Toggle' element is not existing on the Main page
   And each of note entries has 'title'
   And each of note entries has 'substitle'

@Login
Scenario: 1. Verifying items on Main page as a logged in user
   Given the list of notes should be displayed
   Then the 'Filter' element is existing on the Main page
   And the 'Toggle' element is existing on the Main page
   And each of note entries has 'title'
   And each of note entries has 'substitle'

Scenario: 2. Opening a note item
   Given I am on 'main' page
   Then the list of notes should be displayed
   When I click on a random note item and store its title
   Then 'Note' page should be opened
   And the title of the opened note should be equal to the stored one

@Login
Scenario: 3. Switching the only my notes toggle
   Given the list of notes should be displayed
   When I switch Only my notes toggle and count the notes
   Then the count of notes is less than before

Scenario: 4. Verifying sorting options
   Given I am on 'main' page
   #Then the text of default filtering is 'Title'
   When I expand filter dropdown
   Then the filter menu is visible
   And the 'Title' option is visible in the filter
   And the 'User' option is visible in the filter
   And the 'Date' option is visible in the filter

@Wip
Scenario: 5. Selecting a sorting by 'Title'
    Given I am on 'main' page
    When I expand filter dropdown
    And I choose 'Title' option
    Then the notes are sorted by 'Title'