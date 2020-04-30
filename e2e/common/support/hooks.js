const {
	After,
	Before
} = require('cucumber');
const utils = require('./utils');

const GLOBAL_TIMEOUT = 30e3;

Before(() => {
	global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
});

Before({tags: "@Login"}, () => {
	return utils.login();
});

After({tags: "@DeleteCreatedNotes"}, () => {
	return utils.deleteNotes();
});