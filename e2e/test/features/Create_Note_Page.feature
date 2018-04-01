@Run 
Feature: Create a Note Feature
As a user I want to be able to create a note item

@Login
Scenario: 1. Verifying a creation flow
  Given 'Main' page should be opened

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

@Login @DeleteCreatedNotes
Scenario: 2. Creation of a note
  Given 'Main' page should be opened
  When I click create note button
  And I type 'random string and store it' into the 'Title' field
  And I type 'subtitle' into the 'Subtitle' field
  And I click 'Next' button to continue
  And I click 'Next' button to continue
  And I click on the map
  And I click 'Next' button to continue
  And I upload a photo
  And I click 'Finish' button to continue
  Then Alert message should be displayed

  When I click OK button in modal
  Then 'Note' page should be opened
  And the title of the opened note should be equal to the stored one


  # TO-DO 
  # Create a test for creting a note (check that it is created); After the test delete the created note by using Hooks
  # Create a test for deleting a note ; Before the tests create a note using a HOOK!