import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateText = this.updateText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') this.sendMessage();
  }

  updateText(e) {
    this.setState({ text: e.target.value });
  }

  sendMessage() {
    App.messages.speak(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <input className='chat-bar-text-input'
        type='text'
        value={ this.state.text }
        onKeyPress={ handleKeyPress }
        onChange={ updateText } />
    );
  }
}

export default ChatBar;
