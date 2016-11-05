import React from 'react';

class TopContent extends React.Component {
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
        <div><header className="bs-header">
        <div className="container">
          <h1>Contact Manager</h1>
          <p>Simple Reactjs example application</p>
        </div>
      </header>
   <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 main-container">
            </div>
          </div>
        </div>
        <div>
          <h2 className="page-header text-center">List of contacts</h2>
          <p className="text-center">
            <a href="#contact" className="btn btn-lg btn-outline">Add Contact</a>
          </p>
          <ul className="media-list row contacts-container" />
        </div>
      </div>

        </div>
    );
  }
}

export default TopContent;
