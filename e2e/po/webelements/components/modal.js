const PageComponent = require('../PageComponent');
const PageElement = require('../PageElement');

class Modal extends PageComponent {
	constructor(el) {
		super(el);
	}

	/*
	 *Initializes the Ok button in the modal
	 * @returns {Button}
	 */
	getOkButton() {
		return new PageElement(this.rootEl.$('button.confirm'));
	}

	getMessage() {
		return new PageElement(this.rootEl.$("p[style='display: block;']"));
	}
}

module.exports = Modal;