import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import TopContent from './components/TopContent.jsx';
import ContactPage from './components/ContactPage.jsx';
import Contacts from './components/Contacts.jsx';
require('./main.scss');
require('./main.css');
require('toastr');
require ('jquery');
require("bootstrap-webpack");
var AppDispatcher = require('./dispatcher/appDispatcher');
var ActionTypes = require('./constants/actionTypes');
var ContactsApi = require('./Api/ContactsApi');

AppDispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				contacts: ContactsApi.getAllContacts()
			}
		});

ReactDOM.render(<App />, document.getElementById('container'));
