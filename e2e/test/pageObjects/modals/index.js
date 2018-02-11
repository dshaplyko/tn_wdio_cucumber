'use strict';
const Modal = require('./modal');
const AlertModal = require('./alertModal');

exports.atAlertModal = function() {
    return new AlertModal (browser.element('.sweet-alert'));
};

exports.atModal = function() {
    return new Modal (browser.element('.sweet-alert'));
};

exports.getModal = function(modalName) {
    switch (modalName.toLowerCase()) {
        case 'alert': return exports.atAlertModal();
        case 'any': return exports.atModal();
        default: return exports.atModal();
    }
};
