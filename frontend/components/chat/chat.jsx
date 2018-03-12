import React from 'react';
import { connect } from 'react-redux';
import { receiveMessage, deleteMessage, requestMessages } from 'actions/message_actions';
import { requestUsers } from 'actions/user_actions';
import { receiveError } from 'actions/error_actions';
import ChatBox from 'chat/chatbox';
import ChatWindow from 'chat/chat_window';
import subscribeTo from 'util/action_cable_util';

// temporary
import Header from 'header';

class MainChat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // TESTING
    this.props.requestUsers();
    this.props.requestMessages();

    // ActionCable initialisation
    App.messages = subscribeTo('MessagesChannel', 'main');
    App.messages.received = (data) => {
      const { action, message } = JSON.parse(data);
      this.props[action](message);
    };
  }

  render() {
    return (
      <main>
        <Header />
        <ChatWindow />
        <ChatBox />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  requestMessages: () => dispatch(requestMessages()),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  deleteMessage: (message) => dispatch(deleteMessage(message)),
  receiveError: (message) => dispatch(receiveError(message))
});

export default connect(
  null,
  mapDispatchToProps
)(MainChat);
