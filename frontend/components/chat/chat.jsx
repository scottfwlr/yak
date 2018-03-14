import React from 'react';
import { connect } from 'react-redux';
import subscriber from 'util/action_cable_util';

import { requestChannels } from 'actions/channel_actions';

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


export default connect()(MainChat);
