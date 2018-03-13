import React from 'react';


export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  sendMessage() {
    if (this.state.text.length) {
      App.messages.newMessage(this.state.text);
    }
    this.setState({ text: '' });
  }


  handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (!e.getModifierState('Shift')) {
        this.sendMessage();
        e.target.textContent = "";
      }
    } 
  }

  handleInput(e) {
    e.persist();
    this.setState({ text: e.target.textContent }, () => {
      e.target.textContent = this.state.text;
    });
  }

  render() {
    return (
      <div contentEditable className='chat-box-text-area'
        onKeyDown={ this.handleKeyDown }
        onInput={ this.handleInput }>
      </div>
    );
  }

}