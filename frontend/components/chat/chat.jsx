import React from 'react';
import { connect } from 'react-redux';
import { receiveMessage, requestMessages } from 'actions/message_actions';
import { requestUsers } from 'actions/user_actions';
import ChatBox from 'chat/chatbox';
import ChatWindow from 'chat/chat_window';

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
    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      connected: () => console.log('we connected'),
      disconnected: () => console.log('we disconnected'),
      received: (message) => this.props.receiveMessage(JSON.parse(message)),
      speak: function(text) {
        return this.perform('speak', { text });
      }
    });
  }

  render() {
    const chat = Object.values(this.props.messages)

    return (
      <main>
        <Header />
          <ChatWindow />
        <ChatBox />
      </main>
    );
  }
}


const mapStateToProps = ({ entities: { users, messages } }) => ({
  users,
  messages
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  requestMessages: () => dispatch(requestMessages()),
  receiveMessage: (message) => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainChat);
