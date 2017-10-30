"use strict";
const Page = require('./page')
const Field = require('../../pageObjects/webelements/fields/field');
const Button = require('../../pageObjects/webelements/buttons/button')

class RegistrationPage extends Page {

    open() {
        super.open('register');
    }
    
    isPageOpened() {
        this.getRegistrationForm().waitForVisible(GLOBAL_TIMEOUT);
        return this.getRegistrationForm().isVisible();
    }

    getRegistrationForm() { 
        return browser.element(".page-register-route");    
    }

    getFirstName() { 
        return new Field (browser.element('#form-firstName'));         
    }

    getLastName() { 
        return new Field (browser.element('#form-lastName'));          
    }

    getEmail() { 
        return new Field (browser.element('#form-email'));             
    }

    getUserName() { 
        return new Field (browser.element('#form-username'));          
    }

    getPassword() { 
        return new Field (browser.element('#form-password'));          
    }

    getBirthday() { 
        return new Field (browser.element('#date-picker-birthday'));   
    }

    getRegisterButton() { 
        return new Button (browser.element("button[name='register']")); 
    }

    getSignIn() { 
        return new Button (browser.element('.logout-footer a'));        
    }
    
}

module.exports = RegistrationPage;