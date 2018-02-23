"use strict";
const WebElement = require('../webelement');
const Field = require('../fields/field');
const Button = require('../buttons/button')

class Form extends WebElement {

    getElement(elem) {
        switch (elem.toLowerCase()) {
            case 'first name field': 
                return new Field (browser.element('#form-firstName'));
            case 'last name field': 
                return new Field (browser.element('#form-lastName'));
            case 'email field': 
                return new Field (browser.element("input[name='email']"));
            case 'user name field': 
                return new Field (browser.element('#form-username'));
            case 'password field': 
                return new Field (browser.element("input[name='password']"));
            case 'birthday field': 
                return new Field (browser.element('#date-picker-birthday'));
            case 'login button': 
                return new Button (browser.element("button[name='login']"));
            case 'register button': 
                return new Button (browser.element("button[name='register']"));
            case 'sign up button':
                return new Button (browser.element('.login-footer a'));
            case 'sign in button':
                return new Button (browser.element('.logout-footer a'));
        }
    };
}

module.exports = Form;