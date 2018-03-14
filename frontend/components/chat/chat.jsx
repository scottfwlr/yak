import React from 'react';
import { connect } from 'react-redux';
import subscriber from 'util/action_cable_util';

import { requestUsers } from 'actions/user_actions';
import { requestChannels } from 'actions/channel_actions';
import { requestMessages, receiveMessage, deleteMessage } from 'actions/message_actions';
import { receiveError } from 'actions/error_actions';

import ChatWindow from 'chat/chat_window';
import ChatBox from 'chat/chatbox';


// temporary
import Header from 'header';

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    App.subscribeTo = subscriber(props.dispatch, 'MessagesChannel');
  }

  componentWillMount() {
    this.props.dispatch(requestChannels());
    // ActionCable initialisation
    App.messages = App.subscribeTo('general');
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


// const mapDispatchToProps = dispatch => ({
//   requestUsers: () => dispatch(requestUsers()),
//   requestMessages: () => dispatch(requestMessages()),
//   requestChannels: () => dispatch(requestChannels()),
//   receiveMessage: (message) => dispatch(receiveMessage(message)),
//   deleteMessage: (message) => dispatch(deleteMessage(message)),
//   receiveError: (message) => dispatch(receiveError(message))
// });

export default connect()(MainChat);
