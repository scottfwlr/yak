// channel_chat_container.js

import { connect } from 'react-redux';
import { messagesByDates } from 'reducers/selectors';
import ChatWindow from 'chat/chat_window';

const ChannelChatContainer = ({ messagesByDates, channel, deleteMessage }) => (
  <ChatWindow 
    messagesByDates={ messagesByDates }
    deleteMessage={ deleteMessage(channel) } />
);

const mapStateToProps = (state) => ({
  messagesByDates: messagesByDates(state.entities.messages)
});

const mapDispatchToProps = dispatch => ({
  deleteMessage: (channel) => (id) => App.channels[channel].deleteMessage(id),
  // editMessage: (channel) => (id) => (text) =>
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelChatContainer);