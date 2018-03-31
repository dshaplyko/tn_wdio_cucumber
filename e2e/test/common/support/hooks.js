const {After, Before} = require('cucumber');
const pages = require('../../pageObjects/pages');
const testData = require('../support/data');


Before({tags: "@Login"}, function () {

    let username = testData['username'];
    let password = testData['password'];

    pages.getPage('Login').open();
    pages.atLoginPage().getForm().getElement('email field').typeIn(username);
    pages.atLoginPage().getForm().getElement('password field').typeIn(password);
    console.log('I am logged in');
    
    return pages.atLoginPage().getForm().getElement('login button').click();

});
