import React from 'react';
import { connect } from 'react-redux';
import { FirstMessage, Message } from 'chat/message';

const deleteMessage = (message) => () => {
  App.channels[channel].deleteMessage(id)
};

const MessagesBox = ({ user, firstMessage, messages }) => (
  <div className='chat-messages-box'>
    <FirstMessage
      author={ user }
      message={ firstMessage }
      />
    {
      messages && messages.length ? messages.map(message => (
        <Message message={ message }
          key={ message.id }
          />
      )) : null
    }
  </div>
);

const mapStateToProps = ({ entities: { users } }, { firstMessage: { authorId } }) => ({
  user: users[authorId]
})


export default connect(mapStateToProps)(MessagesBox);
