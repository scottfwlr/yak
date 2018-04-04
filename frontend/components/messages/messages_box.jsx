import React from 'react';
import ChatMessage from 'messages/chat_message';
import FirstMessage from 'messages/first_message';

const MessagesBox = ({ firstMessage, messages }) => (
  <div className='chat-messages-box'>
    <FirstMessage
      authorId={ firstMessage.authorId }
      messageId={ firstMessage.id }
      />
    {
      messages && messages.length ? messages.map(message => (
        <ChatMessage 
          messageId={ message.id }
          key={ message.id }
          />
      )) : null
    }
  </div>
);

export default MessagesBox;
