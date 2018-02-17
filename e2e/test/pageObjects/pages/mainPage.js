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
    
    /*
    *Initializes notes list
    * @returns {Element}
    */
    getNotes() { 
        return browser.element(".notes-grid");   
    }

    /*
    *Initializes toggle for all/my notes
    * @returns {Element}
    */
    getToggle() { 
        return browser.element('#onlyMyButton'); 
    }
}

module.exports = MainPage;