const pages = require('../../po/pages');
const testData = require('./data');

const generateString = number => {

  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < parseInt(number); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const deleteNotes = () => {
  browser.url('/#login');
  browser.url('/#main');
  $('.notes-grid').waitForDisplayed({timeout: 3000});
  $('#onlyMyButton').waitForExist({timeout: 3000});
  pages.atMainPage().getToggle().click();
  $('.note-grid-item:not(.no-result):not(.add)').waitForDisplayed({timeout: 3000});
  if (pages.atMainPage().getNotesGrid().getTrashButton(1).isExisting()) {
    pages.atMainPage().getNotesGrid().getTrashButton(1).click();
    pages.atBasePage().getModal().getOkButton().click();
    deleteNotes();
  }
  return true;
};

let loginState;

function setLoginStatus(status) {
  loginState = status;
}

function getLoginStatus() {
  return loginState;
}

const login = () => {
  
  setLoginStatus(false);
  pages.getPage('Login').open();
  pages.atLoginPage().getForm().getElement('email field').type(testData.username);
  pages.atLoginPage().getForm().getElement('password field').type(testData.password);
  pages.atLoginPage().getForm().getElement('login button').click();
  return setLoginStatus(true);

};

const closeModal = () => {
  pages.atBasePage().getModal().getOkButton().click();
};

module.exports = {
  generateString,
  deleteNotes,
  login,
  closeModal,
  getLoginStatus
};