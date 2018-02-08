"use strict";
const WebElement = require('../webelement');
const Field = require('../fields/field');
const Button = require('../buttons/button')

class Form extends WebElement {


    getElement(elm) {
        
        switch (elm.toLowerCase()) {
            case 'first name field': return new Field (browser.element('#form-firstName')); break;
            case 'last name field': return new Field (browser.element('#form-lastName')); break; 
            case 'email field': return new Field (browser.element("input[name='email']")); break;
            case 'user name field': return new Field (browser.element('#form-username')); break;
            case 'password field': return new Field (browser.element("input[name='password']")); break;
            case 'login button': return new Button (browser.element("button[name='login']")); break;
            case 'register button': return new Button (browser.element(".login-footer a")); break;
        }
    };

}

module.exports = Form;