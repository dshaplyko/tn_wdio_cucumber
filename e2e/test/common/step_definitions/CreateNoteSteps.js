const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');
const testData = require('../support/data');
const Utils = require('../support/utils');
const utils = new Utils();

defineSupportCode((cucumber) => {

    cucumber.Then(/^the '(.*)' button should be (inactive|active)$/, (button, condition) => {

        if (condition === 'inactive') {
            return expect(pages.atCreateNotePage().getButton(button).isButtonActive()).to.equal('-1');
        } 
        return expect(pages.atCreateNotePage().getButton(button).isButtonActive()).to.equal('0');
    });

    cucumber.When(/^I type '(.*)' into the '(.*)' field$/, (text, field) => {
        if (text === 'random string and store it') {
            let randomString = utils.generateString();
            global.stored_title = randomString;
            return pages.atCreateNotePage().getField(field).typeIn(randomString);
        }
        return pages.atCreateNotePage().getField(field).typeIn(text);
    });

    cucumber.When(/^I click '(.*)' button to continue$/, (button) => {
        return pages.atCreateNotePage().getButton(button).click();
    });

    cucumber.When(/^I upload a photo$/, () => {
        let image = testData['testImage'];
        return pages.atCreateNotePage().getDropZone().uploadPhoto(image);
    });

    cucumber.When(/^I click on the map$/, () => {
        return pages.atCreateNotePage().getMap().click();
    });

});