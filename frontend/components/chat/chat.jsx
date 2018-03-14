import React from 'react';
import { connect } from 'react-redux';
import createCableSubscriber from 'util/action_cable_util';


import ChatWindow from 'chat/chat_window';
import ChatBox from 'chat/chatbox';

// temporary?
import { requestChannels } from 'actions/channel_actions';
// temporary
import Header from 'header';

const MainChat = ({ dispatch }) => {
  createCableSubscriber(dispatch, 'MessagesChannel');
  App.subscribeTo('general');
  dispatch(requestChannels());
  return (
    <main>
      <Header />
      <ChatWindow />
      <ChatBox />
    </main>
  );
};


export default connect()(MainChat);
