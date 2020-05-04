const PageComponent = require('../PageComponent');
const PageElement = require('../PageElement');

class Header extends PageComponent {

	/*
	 * Initiates Login button in the Header
	 * @returns {Button}
	 */
	getLoginButton() {
		return new PageElement(this.rootEl.$('#loginMenuButton'));
	}

	/*
	 * Initiates Sigh Up button in the Header
	 * @returns {Button}
	 */
	getSignUp() {
		return new PageElement(this.rootEl.$('#registerMenuButton'));
	}

	/*
	 * Initiates Logo in the Header
	 * @returns {Link}
	 */
	getLogo() {
		return new PageElement(this.rootEl.$('.logo'));
	}

	/*
	 * Initiates Menu Button in the Header
	 * @returns {Button}
	 */
	getMenuButton() {
		return new PageElement(this.rootEl.$('span.menu-button'));
	}
}

module.exports = Header;