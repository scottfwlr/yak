import React from 'react';
import { FirstMessage, Message } from 'chat/message';

const MessagesBox = ({ author, firstMessage, messages, editMessage, deleteMessage }) => (
  <div className='chat-messages-box'>
    <FirstMessage
      author={ author }
      message={ firstMessage }
      editMe={ editMessage }
      deleteMe={ deleteMessage }
      />
    {
      messages && messages.length ? messages.map(message => (
        <Message message={ message }
          key={ message.id }
          editMe={ editMessage }
          deleteMe={ deleteMessage }
          />
      )) : null
    }
  </div>
)

export default MessagesBox;
