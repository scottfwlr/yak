import React from 'react';


export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.updateText = this.updateText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleKeypress(e) {
    if (e.key === 'Enter') this.sendMessage();
  }

  updateText(e) {
    this.setState({ text: e.target.value });
  }

  sendMessage() {
    if (this.state.text.length) {
      App.messages.newMessage(this.state.text);
    }
    this.setState({ text: '' });
  }

  render() {
    return (
      <textarea className='chat-box-text-input'
        placeholder='Type message here'
        onKeyUp={ this.handleKeypress }
        onChange={ this.updateText }>
        { this.state.text }
        </textarea>

    );
  }

}
