"use strict";
const Page = require('./page');
const Note = require('../webelements/structures/note');
const Checkbox = require('../webelements/checkboxes/checkbox');
const Filter = require('../webelements/components/filter');

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
        return new Note (browser.element('.notes-grid'));   
    }

    /*
    *Initializes toggle for all/my notes
    * @returns {Checkbox}
    */
    getToggle() { 
        return new Checkbox (browser.element('#onlyMyButton')); 
    }

    /*
    *Initializes filter for notes
    * @returns {Filter}
    */
    getFilter() {
        return new Filter (browser.element('.filter-item'));
    }
}

module.exports = MainPage;