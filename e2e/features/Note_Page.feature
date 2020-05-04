@Wip
Feature: Note Feature
	As a user I want to be able to navigate and use the Note's page

	Scenario: 1. Verifying items on Note page
		Given I am on 'main' page
		When I click on a random note item and store its title
		Then 'Note' page should be opened
		And the 'Map' element is visible on the Note page
		And the 'Content' element is visible on the Note page
		And the 'Close button' element is visible on the Note page
		And the 'Image gallery' element is visible on the Note page
		And the 'Sign' element is visible on the Note page

	Scenario: 2. Clicking the Close button on the Note page
		Given I am on 'main' page
		When I click on a random note item and store its title
		Then 'Note' page should be opened

		When I click close button on the Note
		Then 'Main' page should be opened