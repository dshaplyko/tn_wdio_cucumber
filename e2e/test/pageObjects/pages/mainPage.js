"use strict";
const Page = require('./page')

class MainPage extends Page {

    open() {
        super.open('main');
    }

    isPageOpened() {
        this.getNotes().waitForVisible(GLOBAL_TIMEOUT);
        return this.getNotes().isVisible();
    }
    
    getNotes() { 
        return browser.element(".notes-grid");   
    }

    getToggle() { 
        return browser.element('#onlyMyButton'); 
    }
}

module.exports = MainPage;