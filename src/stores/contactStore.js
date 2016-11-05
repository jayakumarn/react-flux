"use strict";

var AppDispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _contacts = [];

var ContactStore =assign({}, EventEmitter.prototype, {
	
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllContacts: function() {
		return _contacts;
	},

	getContactById: function(id) {
        
		var item= _.find(_contacts, {id: +id});
        return item;
	}
});

AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_contacts = action.initialData.contacts;
			ContactStore.emitChange();
			break;
		case ActionTypes.CREATE_CONTACT:
			_contacts.push(action.contact);
			ContactStore.emitChange();
			break;
		case ActionTypes.UPDATE_CONTACT:
			var existingContact = _.find(_contacts, {id: action.contact.id});
			var existingContactIndex = _.indexOf(_contacts, existingContact);
			_contacts.splice(existingContactIndex, 1, action.contact);
			ContactStore.emitChange();
			break;
		case ActionTypes.DELETE_CONTACT:
			_.remove(_contacts, function(contact) {
				return action.id === contact.id;
			});
			ContactStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = ContactStore;
