"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ContactApi = require('../Api/ContactsApi');
var ActionTypes = require('../constants/actionTypes');

var ContactActions = {
	
	createContact: function(contact) {
		var newContact = ContactApi.saveContact(contact);		
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_CONTACT,
			contact: newContact
		});
	},

	updateContact: function(contact) {
		var updatedContact = ContactApi.saveContact(contact);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_CONTACT,
			contact: updatedContact
		});
	},

	deleteContact: function(id) {
		ContactApi.deleteContact(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_CONTACT,
			id: id
		});
	}
};

module.exports = ContactActions;
