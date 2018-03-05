@Run 
Feature: Create a Note Feature
As a user I want to be able to create a note item

Scenario: 1. Verifying a creation flow
  Given I am on 'login' page
  When I enter credentials
  Then 'Main' page should be opened

  When I click create note button
  Then 'Create note' page should be opened
    And the 'Next' button should be inactive

  When I type 'new note test' into the 'Title' field
    And I type 'new note test' into the 'Subtitle' field
  Then the 'Next' button should be active

  When I click 'Next' button to continue
    And I type 'new note test' into the 'Content' field
  Then the 'Next' button should be active

  When I click 'Next' button to continue
  Then the 'Next' button should be inactive

  When I click on the map
  Then the 'Next' button should be active

  When I click 'Next' button to continue
  Then the 'Finish' button should be inactive

  When I upload a photo
  Then the 'Finish' button should be active