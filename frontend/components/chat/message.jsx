import React from 'react';

// editMessage will be a lot of work


const timestampify = (timestamp) => {
  const date = new Date(timestamp);
  return date.toTimeString().slice(0,5);
}

export const FirstMessage = ({ author, message, editMe, deleteMe }) => (
  <div className='chat-message first-message'>
    <div className='chat-message-aside-left'>
      <img className='profile-pic chat-message-profile-pic'
        src={ window.profilePicLookup[author.profilePicUrl] }
        alt={ author.fullName }/>
    </div>
    <div className='chat-message-content-right first-message-content-right'>
        <span className='chat-message-byline'>
          <p className='chat-message-author-name'>{ author.displayName }</p>
          <a className='chat-message-timestamp'>{ timestampify(message.createdAt) }</a>
        </span>
        <p className='chat-message-text'>{ message.text }</p>
    </div>
    <div className='chat-message-actions'>
      <p className='fake-link'
        onClick={ editMe(message.id) }>
        edit
      </p>
      <p className='fake-link'
        onClick={ deleteMe(message.id) }>
        delete
      </p>
    </div>
  </div>
);

export const Message = ({ message, editMe, deleteMe }) => (
  <div className='chat-message'>
    <div className='chat-message-aside-left'>
      <a className='chat-message-timestamp'>{ timestampify(message.createdAt) }</a>
    </div>
    <div className='chat-message-content-right'>
      <p className='chat-message-text'>{ message.text }</p>
    </div>
    <div className='chat-message-actions'>
      <p className='fake-link'
        onClick={ editMe(message.id) }>
        edit
      </p>
      <p className='fake-link'
        onClick={ deleteMe(message.id) }>
        delete
      </p>
    </div>
  </div>
);
