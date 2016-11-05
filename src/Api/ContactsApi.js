"use strict";

//This file is mocking a web API by hitting hard coded data.
var contacts = require('./ContactsData').contacts;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(contact) {
    var length=_clone(contacts).length+1;
	return length;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ContactsApi = {
	getAllContacts: function() {
		return _clone(contacts); 
	},

	getContactById: function(id) {
		var contact = _.find(contacts, {id: id});
		return _clone(contact);
	},
    
   
	saveContact: function(contact) {
        
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the contact to the DB via AJAX call...');
		
		if (contact.id) {
			var existingContactIndex = _.indexOf(contacts, _.find(contacts, {id: contact.id})); 
			contacts.splice(existingContactIndex, 1, contact);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new contacts in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			contact.id = _generateId(contact);
			contacts.push(_clone(contact));
		}

		return contact;
	},

	deleteContact: function(id) {
		console.log('Pretend this just deleted the contact from the DB via an AJAX call...');
		_.remove(contacts, { id: id});
	}
};

module.exports = ContactsApi;