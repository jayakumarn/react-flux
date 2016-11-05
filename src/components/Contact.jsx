import React from 'react';
import TopContent from './TopContent.jsx'
var ContactActions = require('../actions/contactsActions');
var ContactStore = require('../stores/ContactStore');
var toastr = require('toastr');


class Contact extends React.Component {
  constructor(props, context){
    super(props, context);

      
      this.state = {
      contact: { id: '', name: 'jai', email: 'sample@gmail.com',tel:'0123456789'},
			errors: {},
			dirty: false
    };
      
  }
    

    
	componentDidMount() {
		var contactId = this.props.params.id;      
        
		if (contactId) {
			this.setState({contact: ContactStore.getContactById(contactId) });
		}

	}

saveContact(event) {    
		event.preventDefault();    
    	if (this.state.contact.id) {
			ContactActions.updateContact(this.state.contact);
		} else {
			ContactActions.createContact(this.state.contact);
		}
		
		this.setState({dirty: false});
		toastr.success('Contact saved.');
        setTimeout(function(){ window.history.back();}, 3000);

	}
    
    
    setContactState(event) {
        debugger;
		
		var field = event.target.name;
		var value = event.target.value;
		this.state.contact[field] = value;
		return this.setState({contact: this.state.contact});
	}
  render(){
    return (
     
         <div>
        <h1>Add Contact</h1>     
               <form role="form" className="form-horizontal contract-form">
        <div className="form-group">
          <label className="col-sm-4 control-label">Full name:</label>
          <div className="col-sm-6">
            <input type="text" className="form-control contact-name-input" name="name" value={this.state.contact.name} onChange={this.setContactState.bind(this)} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-4 control-label">Email address:</label>
          <div className="col-sm-6">
            <input type="email" className="form-control contact-email-input" name="email" value={this.state.contact.email} onChange={this.setContactState.bind(this)} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-4 control-label">Telephone number:</label>
          <div className="col-sm-6">
            <input type="tel" className="form-control contact-tel-input" value={this.state.contact.tel} name="tel" onChange={this.setContactState.bind(this)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-4 col-sm-3">
            <button onClick={this.saveContact.bind(this)} className="btn btn-outline btn-lg btn-block">Submit</button>
          </div>
          <div className="col-sm-3">
            <a href="#contacts" className="btn btn-outline btn-lg btn-block">Cancel</a>
          </div>
        </div>
      </form>
   
        </div>
    );
  }
}


export default Contact;
