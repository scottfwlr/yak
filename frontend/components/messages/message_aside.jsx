import React from 'react';

const MessageAside = ({ timestamp }) => (
  <div className='chat-message-aside-left'>
    <a className='chat-message-timestamp'>{ timestamp }</a>
  </div>
);

export default MessageAside;

