"use strict";
const Page = require('./page');
const Button = require('../webelements/buttons/button');

class HomePage extends Page {

    open() {
        super.open('/');
    }

    getStartedButton() { 
        return new Button (browser.element('#getStarted'));         
    }
}

module.exports = HomePage;