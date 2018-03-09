import React from 'react';
import { FirstMessage, Message } from 'chat/message';

const MessagesBox = ({ author, firstMessage, messages }) => (
  <div className='chat-messages-box'>
    <FirstMessage
      author={ author }
      message={ firstMessage } />
    {
      messages.map(message => (
        <Message message={ message } key={ message.id }/>
      ))
    }
  </div>
)

export default MessagesBox;
