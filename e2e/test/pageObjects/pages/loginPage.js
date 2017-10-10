"use strict";
var Page = require('./page')

class LoginPage extends Page {
    get loginBody()       { return browser.element('.page-login-route');      }
    get email()           { return browser.element("input[name='email']");    }
    get password()        { return browser.element("input[name='password']"); }
    get loginButton()     { return browser.element("button[name='login']");   }
    get registerButton()  { return browser.element(".login-footer a");        }
    get welcomeText()     { return browser.element(".login-header");          }

    open() {
        super.open('login');
    }
    
    enterEmail(email) {
        return this.email.setValue(email);
    }

    enterPassword(password) {
        return this.password.setValue(password);
    }

    clickLogin() {
        this.loginButton.click();
    }

    login() {
        this.enterEmail("test@test.ru");
        this.enterPassword("password");
        this.clickLogin();
    }

    clickRegisterButton() {
        return this.registerButton.click();
    }

    loginFieldIsVisible() {
        return this.email.isVisible();
    }

    passwordFieldIsVisible() {
        return this.password.isVisible();
    }

    registerLinkIsVisible() {
        return this.registerButton.isVisible();
    }

    getWelcomeText() {
        return this.welcomeText.getText();
    }

    isPageOpened() {
        this.loginBody.waitForVisible(GLOBAL_TIMEOUT);
        return this.loginBody.isVisible();
    }
}

module.exports = LoginPage;