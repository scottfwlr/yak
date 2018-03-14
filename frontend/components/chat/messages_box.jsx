import React from 'react';
import { connect } from 'react-redux';
import { FirstMessage, Message } from 'chat/message';

const MessagesBox = ({  users, firstMessage, messages, deleteMessage }) => (
  <div className='chat-messages-box'>
    <FirstMessage
      author={ users[firstMessage.authorId] || {} }
      message={ firstMessage }
      deleteMe={ deleteMessage(firstMessage.id) }
      />
    {
      messages && messages.length ? messages.map(message => (
        <Message message={ message }
          key={ message.id }
          deleteMe={ deleteMessage(message.id) }
          />
      )) : null
    }
  </div>
)

const mapStateToProps = state => ({
  users: state.entities.users
})

export default connect(mapStateToProps)(MessagesBox);
