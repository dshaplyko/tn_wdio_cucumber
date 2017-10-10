"use strict";
var Page = require('./page')

class RegistrationPage extends Page {

    get registrationForm() { return browser.element(".page-register-route");    }
    get firstName()        { return browser.element('#form-firstName');         }
    get lastName()         { return browser.element('#form-lastName');          }
    get email()            { return browser.element('#form-email');             }
    get userName()         { return browser.element('#form-username');          }
    get password()         { return browser.element('#form-password');          }
    get birthday()         { return browser.element('#date-picker-birthday');   }
    get registerbutton()   { return browser.element("button[name='register']"); }
    get signIn()           { return browser.element('.logout-footer a');        }
    
    open() {
        super.open('register');
    }

    waitUntilRegistrationFormIsDisplayed() {
        browser.waitUntil(() => {
            return this.registrationForm.isVisible() === true
          }, GLOBAL_TIMEOUT, 'login form to be visible');
    }

    firstNameIsVisible() {
        return this.firstName.isVisible();
    }

    lastNameIsVisible() {
        return this.lastName.isVisible();
    }

    emailIsVisible() {
        return this.email.isVisible();
    }

    usernameIsVisible() {
        return this.userName.isVisible();
    }

    passwordFieldIsVisible() {
        return this.password.isVisible();
    }

    bithdayIsVisible() {
        return this.birthday.isVisible();
    }

    registerLinkIsVisible() {
        return this.registerbutton.isVisible();
    }

    clickSignIn() {
        return this.signIn.click();
    }

    isPageOpened() {
        return this.registrationForm.isVisible();
    }

}

module.exports = RegistrationPage;