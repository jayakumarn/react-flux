import React from 'react';
import ContactData  from '../Api/ContactsData.js'
import ContactsActions  from '../actions/contactsActions.js'
var ContactStore = require('../stores/ContactStore');
var toastr = require('toastr');



class ContactList extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: [       
      ]
    };
  }
    
    

    componentWillMount() {	
		ContactStore.addChangeListener(this._onChange.bind(this));
	}


	_onChange() {
		this.setState({ contacts: ContactStore.getAllContacts() });
	}

deleteContact(id, event) {
    
		event.preventDefault();
		ContactsActions.deleteContact(id);
		toastr.success('Contact Deleted');
	}
    
  render(){
      
  	var createContactRow = function(contact) {
        
        var imagePath="../../src/content/img/faces/"+contact.id+".jpg";
         var path="#contact/"+contact.id;
			return (
               
				 <div className="media col-md-6 col-lg-4" key={contact.id}>
        <div className="thumbnail">
          <img className="media-object" src={imagePath} />
        </div>
        <div className="media-heading">
          <h3>
                {contact.name}
            <small>
              <a href={path}><span className="glyphicon glyphicon-pencil" /></a>
              <a onClick={this.deleteContact.bind(this, contact.id)} className="delete-contract">
                <span className="glyphicon glyphicon-trash" />
              </a>
            </small>
          </h3>
        </div>
        <div className="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>{contact.tel}</dd>
            <dt>Email:</dt>
            <dd>{contact.email}</dd>
          </dl>
        </div>
        <hr />
      </div>
			);
		};


    
       	return (
			<div>
				
						{this.props.contacts.map(createContactRow, this)}
				
			</div>
		);

  }
}

export default ContactList;

