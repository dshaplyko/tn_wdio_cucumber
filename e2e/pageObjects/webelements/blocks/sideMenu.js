"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');
const Link = require('../links/link');

class SideMenu extends WebElement {

    getElement(elem){
        switch(elem.toLowerCase()){
            case 'news link':
                return new Link (this.rootEl.$('#newsMenuItem'));
            case 'gallery link':
                return new Link (this.rootEl.$('#galleryMenuItem'));
            case 'main page link':
                return new Link (this.rootEl.$('#mainpageMenuItem'));
            case 'map link':
                return new Link (this.rootEl.$('#mapMenuItem'));
            case 'logout button':
                return new Button (this.rootEl.$('#logoutMenuButton'));
            case 'edit profile link':
                return new Link (this.rootEl.$('.edit'));
        }
    }  
}

module.exports = SideMenu;