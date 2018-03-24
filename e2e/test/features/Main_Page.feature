@Run
Feature: Main Feature
As a user I want to be able to navigate and use the Main page

Scenario: 1. Verifying items on Main page as a visitor
   Given I am on 'main' page
   Then the list of notes should be displayed
    And the 'Filter' element is existing on the Main page
    And the 'Toggle' element is not existing on the Main page
    And each of note entry has 'title'
    And each of note entry has 'substitle'

Scenario: 1. Verifying items on Main page as a logged in user
   Given I am on 'login' page
   When I enter credentials
   Then 'Main' page should be opened
   Then the list of notes should be displayed
    And the 'Filter' element is existing on the Main page
    And the 'Toggle' element is existing on the Main page
    And each of note entry has 'title'
    And each of note entry has 'substitle'

Scenario: 2. Opening a note item
   Given I am on 'main' page
   Then the list of notes should be displayed
   When I click on a random note item and store its title
   Then 'Note' page should be opened
    And the title of the opened note should be equal to the stored one

Scenario: 3. Switching the only my notes toggle
   Given I am on 'login' page
   When I enter credentials
   Then 'Main' page should be opened
   Then the list of notes should be displayed

   When I switch Only my notes toggle and count the notes
   Then the count of notes is less than before

Scenario Outline: 4. Selecting <option> from the filter dropdown
   Given I am on 'main' page
   Then the text of default filtering is 'Title'
   When I expand filter dropdown
   Then the filter menu is visible
   And the 'Title' option is visible in the filter
   And the 'User' option is visible in the filter
   And the 'Date' option is visible in the filter

   When I choose <option> option
   Then the notes are sorted by 'Title'

    Examples:
    | option  | 
    | 'User'  | 
    | 'Title' | 
    | 'Date'  |

