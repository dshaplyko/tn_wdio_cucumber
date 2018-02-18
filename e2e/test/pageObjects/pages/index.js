'use strict';
const Page = require('./Page');
const HomePage = require('./homePage');
const MainPage = require('./mainPage');
const LoginPage = require('./loginPage');
const RegistrationPage = require('./registrationPage');
const NotePage = require('./notePage');

exports.atBasePage = function() {
    return new Page();
};

exports.atHomePage = function() {
    return new HomePage();
};

exports.atMainPage = function() {
    return new MainPage();
};

exports.atLoginPage = function() {
    return new LoginPage();
};

exports.atRegistrationPage = function() {
    return new RegistrationPage();
};

exports.atNotePage = function() {
    return new NotePage();
};


exports.getPage = function(key){
    switch (key.toLowerCase()) {
        case 'home': return new HomePage();
        case 'main': return new MainPage();
        case 'login': return new LoginPage();
        case 'registration': return new RegistrationPage();
        case 'note': return new NotePage();
        default: return new Page();
    }
};
