import React from 'react';
import ContactData  from '../Api/ContactsData.js'
import ContactList  from './ContactList.jsx'
var ContactStore = require('../stores/ContactStore');
//var ContactActions = require('../actions/ContactActions');




class ContactPage extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: [       
      ]
    };
  }
    
    
componentDidMount(){

    
    
    this.setState({ contacts: ContactStore.getAllContacts() });
	}
        
  render(){
      
    var messageNodes = this.state.contacts.map((message)=> {
      return (
        <div>{message}</div>
      );
    });

    
        return (
			<div>			
           < ContactList contacts={this.state.contacts}	/>		</div>
		);

  }
}

export default ContactPage;

