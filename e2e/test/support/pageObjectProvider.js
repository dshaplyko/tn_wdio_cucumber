var PAGE_OBJECT_MAP = {
    "main": "../pageObjects/pages/mainPage",
    "login": "../pageObjects/pages/loginPage",
    "registration": "../pageObjects/pages/registrationPage",
    "home": "../pageObjects/pages/homePage"
};

module.exports.getPage = page => {
    const PageObject = require(PAGE_OBJECT_MAP[page]);
    return new PageObject();
};
