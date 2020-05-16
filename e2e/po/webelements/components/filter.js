const PageComponent = require('../PageComponent');
const PageElement = require('../PageElement');

class Filter extends PageComponent {

	getElement(elem) {
		switch (elem.toLowerCase()) {
			case 'title':
				return new PageElement(this.rootEl.$('#orderByTitle'));
			case 'user':
				return new PageElement(this.rootEl.$('#orderByUsername'));
			case 'date':
				return new PageElement(this.rootEl.$('#orderByDate'));
		}
	}
}

module.exports = Filter;