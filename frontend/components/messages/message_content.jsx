import React from 'react';

const MessageContent = ({ text }) => (
  <div className='chat-message-content-right'>
    <p className='chat-message-text'>{ text }</p>
  </div>
);

export default MessageContent;