const PageComponent = require('../PageComponent');

class Dropdown extends PageComponent {

	getDefaultValue() {
		return this.rootEl.$('.filter-item div > div > div:nth-child(2)').getText();
	}
}

module.exports = Dropdown;