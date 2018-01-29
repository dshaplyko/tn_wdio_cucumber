"use strict";
const Page = require('./page')

class MainPage extends Page {
    get notes() { 
        return browser.element(".notes-grid");   
    }

    get toggle() { 
        return browser.element('#onlyMyButton'); 
    }
    
    open() {
        super.open('main');
    }

    isPageOpened() {
        this.notes.waitForVisible(GLOBAL_TIMEOUT);
        return this.notes.isVisible();
    }
}

module.exports = MainPage;