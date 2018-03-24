"use strict";
const Page = require('./page');
const NotesGrid = require('../webelements/structures/notesGrid');
const Checkbox = require('../webelements/checkboxes/checkbox');
const Dropdown = require('../webelements/dropdowns/dropdown');
const Filter = require('../webelements/components/filter');

class MainPage extends Page {

    open() {
        super.open('main');
    }

    /*
    *Checks if a page is opened
    * @returns {boolean}
    */
    isPageOpened() {
        return this.getNotesGrid().isVisible();
    }
    
    /*
    *Initializes notes list
    * @returns {Element}
    */
    getNotesGrid() { 
        browser.element('.notes-grid').waitForVisible(GLOBAL_TIMEOUT);
        return new NotesGrid (browser.element('.notes-grid'));   
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
        browser.element('[style="padding: 16px 0px; display: table-cell; user-select: none; width: 256px;"]').waitForVisible(GLOBAL_TIMEOUT);
        return new Filter (browser.element('[style="padding: 16px 0px; display: table-cell; user-select: none; width: 256px;"]'));
    }

    /*
    *Initializes dropdown for nfilter
    * @returns {Dropdown}
    */
    getFilterDropdown() {
        browser.element('.filter-item').waitForVisible(GLOBAL_TIMEOUT);
        return new Dropdown (browser.element('.filter-item'));
    }
}

module.exports = MainPage;