"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');
const Link = require('../links/link');

class SideMenu extends WebElement {

    getElement(elem){
        switch(elem.toLowerCase()){
            case 'news link':
                return new Link (this.rootEl.element('#newsMenuItem'));
            case 'gallery link':
                return new Link (this.rootEl.element('#galleryMenuItem'));
            case 'main page link':
                return new Link (this.rootEl.element('#mainpageMenuItem'));
            case 'map link':
                return new Link (this.rootEl.element('#mapMenuItem'));
            case 'logout button':
                return new Button (this.rootEl.element('#logoutMenuButton'));
            case 'edit profile link':
                return new Link (this.rootEl.element('.edit'));
        }
    }  
}

module.exports = SideMenu;