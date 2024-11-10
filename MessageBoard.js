import React, { Component } from 'react';
import AddMessage from './AddMessage'; // Assuming AddMessage is in the same directory

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  // Method to add a new message
  addMessage = (message) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  }

  render() {
    return (
      <div>
        <h1>Message Board</h1>
        <AddMessage addMessage={this.addMessage} />
        <ul>
          {this.state.messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageBoard;