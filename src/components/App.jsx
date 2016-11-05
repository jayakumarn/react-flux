import React , { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import TopContent from './TopContent.jsx'
import ContactPage  from './ContactPage.jsx'
import Contact from './Contact.jsx'
import Contacts from './Contacts.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      messages: [
        'Hullo po how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render(){
    var messageNodes = this.state.messages.map((message)=> {
      return (
        <div>{message}</div>
      );
    });

    return (
        <Router history={hashHistory}>
        <Route path='/' component={Contacts} />
        <Route path='/Top' component={TopContent} />
        <Route path='/Contact' component={Contact} />
        <Route path="Contact/:id" name="editContact"  component={Contact} />
        <Route path='/Contacts' component={Contacts} />
      </Router>
        
       
    );
  }
}

export default App;
