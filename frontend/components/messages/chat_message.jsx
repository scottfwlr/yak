import React from 'react';
import { connect } from 'react-redux';
import MessageAside from 'messages/message_aside';
import MessageContent from 'messages/message_content';
import MessageActions from 'messages/message_actions';


const BareChatMessage = ({ message }) => (
  <div className='chat-message'>
    <MessageAside timestamp={ message.timestamp } />
    <MessageContent text={ message.text } />
    <MessageActions 
      channelId={ message.channelId } 
      messageId={ message.id } 
      />
  </div>
);


const mapStateToProps = ({ entities: { messages } }, ownProps) => ({
  message: messages[ownProps.messageId]
});


const ChatMessage = connect(mapStateToProps)(BareChatMessage);

export default ChatMessage;
