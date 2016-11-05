import React , { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import TopContent from './TopContent.jsx'
import ContactPage  from './ContactPage.jsx'
import Contact from './Contact.jsx'


class Contacts extends React.Component {
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
       <div> <TopContent/>
        <ContactPage/>     
        </div>       
       
    );
  }
}

export default Contacts;
