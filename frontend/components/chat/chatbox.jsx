import React from 'react';

const handleKeyDown = (e) => {
  if (e.key === 'Enter' && !e.getModifierState('Shift')) {
    e.preventDefault();
    // App.messages.newMessage(e.target.innerText);
    App.channels['general'].newMessage(e.target.innerText);
    e.target.innerText = "";
  }
}

const ChatBox = () => (
  <div contentEditable className='chat-box-text-area chat-box-uncontrolled'
    onKeyDown={ handleKeyDown }>
  </div> 
);

export default ChatBox;