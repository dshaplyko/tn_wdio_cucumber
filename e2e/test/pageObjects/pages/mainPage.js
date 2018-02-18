"use strict";
const Page = require('./page');
const Note = require('../webelements/structures/note');

class MainPage extends Page {

    open() {
        super.open('main');
    }

    isPageOpened() {
        return this.getNotes().isVisible();
    }
    
    /*
    *Initializes notes list
    * @returns {Element}
    */
    getNotes() { 
        browser.element('.notes-grid').waitForVisible(GLOBAL_TIMEOUT);
        return new Note (browser.element(".notes-grid"));   
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