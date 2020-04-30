"use strict";
const WebElement = require('../webelement');
const Field = require('../fields/field');
const Button = require('../buttons/button')

class Form extends WebElement {

    getElement(elem) {
        switch (elem.toLowerCase()) {
            case 'first name field': 
                return new Field (browser.$('#form-firstName'));
            case 'last name field': 
                return new Field (browser.$('#form-lastName'));
            case 'email field': 
                return new Field (browser.$("input[name='email']"));
            case 'user name field': 
                return new Field (browser.$('#form-username'));
            case 'password field': 
                return new Field (browser.$("input[name='password']"));
            case 'birthday field': 
                return new Field (browser.$('#date-picker-birthday'));
            case 'login button': 
                return new Button (browser.$("button[name='login']"));
            case 'register button': 
                return new Button (browser.$("button[name='register']"));
            case 'sign up button':
                return new Button (browser.$('.login-footer a'));
            case 'sign in button':
                return new Button (browser.$('.logout-footer a'));
        }
    };
}

module.exports = Form;