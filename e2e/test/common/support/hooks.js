const {After, Before} = require('cucumber');
const pages = require('../../pageObjects/pages');
const testData = require('../support/data');
const GLOBAL_TIMEOUT = 30e3;

Before(function () {
    global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
    browser.windowHandleSize({width: 1440, height: 900});

    const chai = require('chai');
    chai.use(require('chai-as-promised'));
    global.expect = chai.expect;
});

Before({tags: "@Login"}, function () {

    let username = testData['username'];
    let password = testData['password'];

    pages.getPage('Login').open();
    pages.atLoginPage().getForm().getElement('email field').typeIn(username);
    pages.atLoginPage().getForm().getElement('password field').typeIn(password);
    return pages.atLoginPage().getForm().getElement('login button').click();

});

After({tags: "@DeleteCreatedNotes"}, function () {

    let deleteNotes = () => {
        browser.url('/#login');
        browser.url('/#main');
        browser.waitForVisible('.notes-grid', 3000)
        browser.waitForExist('#onlyMyButton', 3000)
        pages.atMainPage().getToggle().click();
        browser.waitForVisible('.note-grid-item:not(.no-result):not(.add)', 3000);
        if (pages.atMainPage().getNotesGrid().getTrashButton(1).isExisting()) {
            pages.atMainPage().getNotesGrid().getTrashButton(1).click();
            pages.atBasePage().getModal().getOkButton().click();
            deleteNotes();
        }
        return true;        
    }
    return deleteNotes();
});