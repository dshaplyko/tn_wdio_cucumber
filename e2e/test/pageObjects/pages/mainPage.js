"use strict";
var Page = require('./page')

class MainPage extends Page {
    get notes()     { return browser.element(".notes-grid");   }
    get toggle()    { return browser.element('#onlyMyButton'); }
    
    open() {
        super.open('main');
    }

    waitUntilNotesAreVisible() {
        browser.waitUntil(() => {
            return this.notes.isVisible() === true
          }, GLOBAL_TIMEOUT, 'expected notes to be visible');
    }
    
    toggleAppears() {
        return this.toggle.isExisting();
    }
}

module.exports = MainPage;