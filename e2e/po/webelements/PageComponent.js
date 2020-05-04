class PageComponent {

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

}
module.exports = PageComponent;