import React from 'react';

// editMessage will be a lot of work
// deleteMessage will be less but still a lot

export const FirstMessage = ({ author, message }) => (
  <div className='chat-message first-message'>
    <div className='chat-message-aside-left'>
      <img className='profile-pic chat-message-profile-pic'
        src={ window.profilePicLookup[author.profilePicUrl] }
        alt={ author.fullName }/>
    </div>
    <div className='chat-message-content-right first-message-content-right'>
        <span className='chat-message-byline'>
          <p className='chat-message-author-name'>{ author.displayName }</p>
          <a className='chat-message-timestamp'>{ message.timestamp }</a>
        </span>
        <p className='chat-message-text'>{ message.text }</p>
    </div>
    <div className='chat-message-actions'>
    </div>
  </div>
);

export const Message = ({ message }) => (
  <div className='chat-message'>
    <div className='chat-message-aside-left'>
      <a className='chat-message-timestamp'>{ message.timestamp }</a>
    </div>
    <div className='chat-message-content-right'>
      <p className='chat-message-text'>{ message.text }</p>
    </div>
    <div className='chat-message-actions'>
    </div>
  </div>
);
