import React from 'react';
import MessagesBox from 'chat/messages_box';
import { connect } from 'react-redux';
import { messageRunsSelector } from 'reducers/selectors';



class ChatWindow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.messageRuns.map(messageArray => {
      const [firstMessage, ...messages] = messageArray;
      return (
        <MessagesBox
          author={ this.props.users[firstMessage.authorId] }
          firstMessage={ firstMessage }
          messages={ messages }
          key={ firstMessage.id }
        />
      );
    });
  }
}

const mapStateToProps = ({ entities: { messages, users } }) => ({
  messageRuns: messageRunsSelector(messages),
  users
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
