import React from 'react';

const handleKeyDown = (channel) => (e) => {
  if (e.key === 'Enter' && !e.getModifierState('Shift')) {
    e.preventDefault();
    App.channels[channel].newMessage(e.target.innerText);
    e.target.innerText = "";
  }
}

const ChatBox = ({ channel }) => (
  <div className='chat-box-text-area chat-box-uncontrolled'
    contentEditable
    onKeyDown={ handleKeyDown(channel) }>
  </div> 
);

export default ChatBox;