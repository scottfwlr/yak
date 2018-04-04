import React from 'react';

const FirstMessageContent = ({ author, message }) => (
  <div className='chat-message-content-right'>
    <div className='first-message-content-right-container'>
      <span className='chat-message-byline'>
        <p className='chat-message-author-name'>{ author ? author.displayName : null }</p>
        <a className='chat-message-timestamp'>{ message.timestamp }</a>
      </span>
      <p className='chat-message-text'>{ message.text }</p>
    </div>
  </div>
);

export default FirstMessageContent;