const PageComponent = require('../PageComponent');

class Filter extends PageComponent {

	getElement(elem) {
		switch (elem.toLowerCase()) {
			case 'title':
				return this.rootEl.$('#orderByTitle');
			case 'user':
				return this.rootEl.$('#orderByUsername');
			case 'date':
				return this.rootEl.$('#orderByDate');
		}
	}
}

module.exports = Filter;