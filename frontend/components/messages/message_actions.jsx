import React from 'react';
import { connect } from 'react-redux';

const BareMessageActions = ({ channel, messageId, editMessage, deleteMessage }) => {
  const deleteMessageBound = () => deleteMessage(channel.name, messageId);

  return (
    <div className='chat-message-actions'>
      <div onClick={ editMessage }>
        <i className="far fa-edit chat-message-action-item c-m-a-i-edit"></i>
      </div>
      <div onClick={ deleteMessageBound }>
        <i className="far fa-times-circle chat-message-action-item c-m-a-i-delete"></i>
      </div>
    </div>
  );
};


const mapStateToProps = ({ channels }, ownProps) => ({
  channel: channels[ownProps.channelId]
});

const mapDispatchToProps = dispatch => ({
  deleteMessage: (channelName, messageId) => App.State.deleteMessage(messageId),
  editMessage: () => {}
});

const MessageActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(BareMessageActions);

export default MessageActions;
