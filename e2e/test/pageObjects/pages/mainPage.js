"use strict";
var Page = require('./page')

class MainPage extends Page {
    get notes()         { return browser.element(".notes-grid"); }
    
    open() {
        super.open('main');
    }

    notesShouldBeVisible() {
        return this.notes.isVisible();
    }  
}

module.exports = MainPage;