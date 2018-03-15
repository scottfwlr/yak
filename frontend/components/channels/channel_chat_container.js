// channel_chat_container.js
import React from 'react';
import { connect } from 'react-redux';
import { messagesByDates } from 'reducers/selectors';
import ChatWindow from 'chat/chat_window';

const ChannelChatContainer = ({ messages, channel }) => (
  <ChatWindow 
    messagesByDates={ messagesByDates(messages) }
    />
);



const mapStateToProps = ({ entities: { messages } }, ownProps) => ({
  messages: ownProps.channel.messages.map(id => messages[id])
});


export default connect(
  mapStateToProps
)(ChannelChatContainer);