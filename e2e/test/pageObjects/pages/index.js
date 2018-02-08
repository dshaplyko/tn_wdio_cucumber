'use strict';
const Page = require('./Page');
const HomePage = require('./homePage');
const MainPage = require('./mainPage');
const LoginPage = require('./loginPage');
const RegistrationPage = require('./registrationPage');

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

exports.getPage = function(key){
    switch (key.toLowerCase()) {
        case 'home': return new HomePage();
        case 'main': return new MainPage();
        case 'login': return new LoginPage(); break;
        case 'registration': return new RegistrationPage();
        default: return new Page();
    }
};
