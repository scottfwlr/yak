import React from 'react';
import { connect } from 'react-redux';
import { receiveMessage, requestMessages } from 'actions/message_actions';
import { requestUsers } from 'actions/user_actions';

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
      received: (data) => {
        console.log('we received');
        console.log(data);
      },
      speak: function(text) {
        return this.perform('speak', { text });
      }
    });
  }

  render() {
    debugger
    const chat = Object.values(this.props.messages)
    chat.forEach(message => {
      message.author = this.props.users[message.author_id]
    });

    return (
      <main>
        {
          chat.map(message => (
            <p>{ `${message.text} (by ${message.author.email})` }</p>
          ))
        }
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
  requestMessages: () => dispatch(requestMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainChat);
