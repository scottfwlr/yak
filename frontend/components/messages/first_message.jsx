import React from 'react';
import { connect } from 'react-redux';
import FirstMessageAside from 'messages/first_message_aside';
import FirstMessageContent from 'messages/first_message_content';
import MessageActions from 'messages/message_actions';

const BareFirstMessage = ({ author, message }) => (
  <div className='chat-message first-message'>
    <FirstMessageAside author={ author } />
    <FirstMessageContent author={ author } message={ message } />
    <MessageActions 
      channelId={ message.channelId } 
      messageId={ message.id } 
      />
  </div>
);


const mapStateToProps = ({ users, messages }, ownProps) => ({
  author: users[ownProps.authorId],
  message: messages[ownProps.messageId]
});


const FirstMessage = connect(mapStateToProps)(BareFirstMessage);

export default FirstMessage;