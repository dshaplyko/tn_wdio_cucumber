const Page = require('./Page'),
	HomePage = require('./homePage'),
	MainPage = require('./mainPage'),
	LoginPage = require('./loginPage'),
	RegistrationPage = require('./registrationPage'),
	NotePage = require('./notePage'),
	GalleryPage = require('./galleryPage'),
	CreateNotePage = require('./createNotePage'),
	ProfilePage = require('./profilePage');

const atBasePage = () => {
	return new Page();
};

const atHomePage = () => {
	return new HomePage();
};

const atMainPage = () => {
	return new MainPage();
};

const atLoginPage = () => {
	return new LoginPage();
};

const atRegistrationPage = () => {
	return new RegistrationPage();
};

const atNotePage = () => {
	return new NotePage();
};

const atGalleryPage = () => {
	return new GalleryPage();
};

const atCreateNotePage = () => {
	return new CreateNotePage();
};

const atProfilePage = () => {
	return new ProfilePage();
};

const getPage = key => {
	switch (key.toLowerCase()) {
		case 'home':
			return new HomePage();
		case 'main':
			return new MainPage();
		case 'login':
			return new LoginPage();
		case 'registration':
			return new RegistrationPage();
		case 'note':
			return new NotePage();
		case 'gallery':
			return new GalleryPage();
		case 'create note':
			return new CreateNotePage();
		case 'profile':
			return new ProfilePage();
		default:
			return new Page();
	}
};

module.exports = {
	atBasePage,
	atHomePage,
	atMainPage,
	atLoginPage,
	atRegistrationPage,
	atNotePage,
	atGalleryPage,
	atCreateNotePage,
	atProfilePage,
	getPage
};