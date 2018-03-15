// chat_message.jsx
import React from 'react';
import { connect } from 'react-redux';
import { FirstMessage, Message } from 'chat/message';
import DateLine from 'chat/date_line';

const mapStateToProps = ({ entities: { messages } }, { msgId }) => ({
  message: messages[msgId]
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);