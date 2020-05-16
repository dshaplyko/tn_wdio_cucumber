class PageElement {

	constructor(el) {
		this.rootEl = el;
	}

	isDisplayed() {
		return this.rootEl.isDisplayed();
	}

	isExisting() {
		return this.rootEl.isExisting();
  }
  
  waitForExist() {
    return this.rootEl.waitForExist({timeout: GLOBAL_TIMEOUT});
  }

  waitForDisplayed() {
    return this.rootEl.waitForDisplayed({timeout: GLOBAL_TIMEOUT});
  }

  click() {
    try {
      this.waitForExist();
      this.rootEl.click();
    } catch (e) {
      console.log(e);
    }
  }

  type(text) {
    try {
      this.waitForExist();
      this.rootEl.setValue(text);
    } catch (e) {
      console.log(e);
    }
  }

  clear() {
    try {
      this.waitForExist();
      this.rootEl.clearElement();
    } catch (e) {
      console.log(e);
    }
  }

  getText() {
    try {
      this.waitForDisplayed();
      return this.rootEl.getText();
    } catch (e) {
      console.log(e);
    }
  }

  isButtonActive() {
    try {
      this.waitForDisplayed();
      return this.rootEl.getAttribute('tabIndex');
    } catch (e) {
      console.log(e);
    }
  }
  
  uploadPhoto(value) {
    try {
      browser.execute(
        el => el.style.display = 'block',
        this.rootEl
      );
      this.rootEl.waitForDisplayed();
      return this.rootEl.setValue(value);
    } catch(e) {
      console.log(e);
    }
	}
}
module.exports = PageElement;