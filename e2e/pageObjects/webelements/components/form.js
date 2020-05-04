const PageComponent = require('../PageComponent');
const PageElement = require('../PageElement');

class Form extends PageComponent {

	getElement(elem) {
		switch (elem.toLowerCase()) {
			case 'first name field':
				return new PageElement(browser.$('#form-firstName'));
			case 'last name field':
				return new PageElement(browser.$('#form-lastName'));
			case 'email field':
				return new PageElement(browser.$("input[name='email']"));
			case 'user name field':
				return new PageElement(browser.$('#form-username'));
			case 'password field':
				return new PageElement(browser.$("input[name='password']"));
			case 'birthday field':
				return new PageElement(browser.$('#date-picker-birthday'));
			case 'login button':
				return new PageElement(browser.$("button[name='login']"));
			case 'register button':
				return new PageElement(browser.$("button[name='register']"));
			case 'sign up button':
				return new PageElement(browser.$('.login-footer a'));
			case 'sign in button':
				return new PageElement(browser.$('.logout-footer a'));
		}
	}
}

module.exports = Form;