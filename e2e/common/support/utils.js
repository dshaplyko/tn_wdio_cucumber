const pages = require('../../pageObjects/pages');
const testData = require('./data');

const generateSring = number => {

  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < parseInt(number); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const deleteNotes = () => {
  browser.url('/#login');
  browser.url('/#main');
  browser.waitForVisible('.notes-grid', 3000);
  browser.waitForExist('#onlyMyButton', 3000);
  pages.atMainPage().getToggle().click();
  browser.waitForVisible('.note-grid-item:not(.no-result):not(.add)', 3000);
  if (pages.atMainPage().getNotesGrid().getTrashButton(1).isExisting()) {
    pages.atMainPage().getNotesGrid().getTrashButton(1).click();
    pages.atBasePage().getModal().getOkButton().click();
    deleteNotes();
  }
  return true;
};

const login = () => {

  pages.getPage('Login').open();
  pages.atLoginPage().getForm().getElement('email field').typeIn(testData.username);
  pages.atLoginPage().getForm().getElement('password field').typeIn(testData.password);
  return pages.atLoginPage().getForm().getElement('login button').click();

};

module.exports = {
  generateSring,
  deleteNotes,
  login
};