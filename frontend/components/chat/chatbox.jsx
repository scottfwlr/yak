import React from 'react';


export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.updateText = this.updateText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  updateText(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendMessage();
  }

  sendMessage() {
    if (this.state.text.length) {
      App.messages.newMessage(this.state.text);
    }
    this.setState({ text: '' });

  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
      <input
        type='text'
        value={ this.state.text }
        onChange={ this.updateText }/>

      <input type='submit' value='Send'/>
      </form>
    );
  }

}
