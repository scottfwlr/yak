import React from 'react';
import { connect } from 'react-redux';
import { receiveMessage } from 'actions/message_actions';

class MainChat extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      connected: () => console.log('we connected'),
      disconnected: () => console.log('we disconnected'),
      received: (data) => {
        console.log('we received');
        console.log(data);
      },
      speak: function(text) { return this.perform('speak', { text }) }
    });
    debugger
  }

  render() {


    return (
      <main>
        



      </main>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainChat);
