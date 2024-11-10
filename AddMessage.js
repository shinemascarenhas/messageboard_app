import React, { Component } from 'react';

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.props.addMessage(inputValue); // Pass the message up to MessageBoard
      this.setState({ inputValue: '' }); // Clear the input field
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Type your message here"
        />
        <button onClick={this.handleSubmit}>Add Message</button>
      </div>
    );
  }
}

export default AddMessage;