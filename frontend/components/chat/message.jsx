import React from 'react';

// editMessage will be a lot of work

const deleteMessage = (id) => {
  const name = App.channelNameFromId[id];
  return () => App.channels[name].deleteMessage(id);
};

const editMessage = () => {

};

const ChatMessage = ({ left, right, author, message, chatClass='' }) => (
  <div className={`chat-message ${chatClass}`}>
    <div className='chat-message-aside-left'>
      {left(author, message)}
    </div>
    <div className='chat-message-content-right'>
      {right(author, message)}
    </div>
    <div className='chat-message-actions'>
      <i className="far fa-edit chat-message-action-item c-m-a-i-edit"
        onClick={ editMessage }>
      </i>
      <i className="far fa-times-circle chat-message-action-item c-m-a-i-delete"
        onClick={ deleteMessage(message.id) }>
      </i>
    </div>
  </div>
);

const firstMessageLeft = (author, message) => (
  <img className='profile-pic chat-message-profile-pic'
    src={ window.profilePicLookup[author.profilePicUrl] }
    alt={ author.fullName }/>
);

const firstMessageRight = (author, message) => (
  <div className='first-message-content-right-container'>
    <span className='chat-message-byline'>
      <p className='chat-message-author-name'>{ author.displayName }</p>
      <a className='chat-message-timestamp'>{ message.timestamp }</a>
    </span>
    <p className='chat-message-text'>{ message.text }</p>
  </div>
);

export const FirstMessage = ({ author, message }) => (
  <ChatMessage chatClass='first-message'
    author={author} message={message}
    left={firstMessageLeft} 
    right={firstMessageRight}
    />
);


const messageLeft = (author, message) => (
  <a className='chat-message-timestamp'>{ message.timestamp }</a>
);

const messageRight = (author, message) => (
  <p className='chat-message-text'>{ message.text }</p>
);

export const Message = ({ author, message }) => (
  <ChatMessage
    author={author} message={message}
    left={messageLeft}
    right={messageRight}
    />
);


