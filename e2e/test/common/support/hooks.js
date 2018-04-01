const {After, Before} = require('cucumber');
const pages = require('../../pageObjects/pages');
const testData = require('../support/data');
const GLOBAL_TIMEOUT = 30e3;

Before(function () {
    global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
    browser.windowHandleSize({width: 1024, height: 768});

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