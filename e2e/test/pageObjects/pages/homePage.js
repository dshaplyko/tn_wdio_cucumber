"use strict";
const Page = require('./page');
const Button = require('../webelements/buttons/button');

class HomePage extends Page {

    open() {
        super.open('/');
    }

    /*
    *Initializes Get Started Button on the home page
    *@returns {Button}
    */
    getStartedButton() { 
        return new Button (browser.element('#getStarted'));         
    }
}

module.exports = HomePage;