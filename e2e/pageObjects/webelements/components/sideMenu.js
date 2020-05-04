const PageComponent = require('../PageComponent');
const PageElement = require('../PageElement');

class SideMenu extends PageComponent {

	getElement(elem) {
		switch (elem.toLowerCase()) {
			case 'news link':
				return new PageElement(this.rootEl.$('#newsMenuItem'));
			case 'gallery link':
				return new PageElement(this.rootEl.$('#galleryMenuItem'));
			case 'main page link':
				return new PageElement(this.rootEl.$('#mainpageMenuItem'));
			case 'map link':
				return new PageElement(this.rootEl.$('#mapMenuItem'));
			case 'logout button':
				return new PageElement(this.rootEl.$('#logoutMenuButton'));
			case 'edit profile link':
				return new PageElement(this.rootEl.$('.edit'));
		}
	}
}

module.exports = SideMenu;