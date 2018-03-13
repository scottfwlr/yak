import React from 'react';
import MessagesBox from 'chat/messages_box';
import { connect } from 'react-redux';
import { messageRunsSelector } from 'reducers/selectors';
import { editMessage, deleteMessage } from 'actions/message_actions';



class ChatWindow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const chatWindow = this.props.messageRuns.map(messageArray => {
      const [firstMessage, ...messages] = messageArray;
      const nullUser = {profilePicUrl: '', fullName: '', displayName: 'loading...'}
      return (
        <MessagesBox
          author={ this.props.users[firstMessage.authorId] || nullUser }
          firstMessage={ firstMessage }
          messages={ messages }
          key={ firstMessage.id }
          deleteMessage={ this.props.deleteMessage }
          editMessage={ this.props.editMessage }
        />
      );
    });

    return (
      <div className='chat-window'>
        { chatWindow} 
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { messages, users } }) => ({
  messageRuns: messageRunsSelector(messages),
  users
});

const mapDispatchToProps = dispatch => ({
  editMessage: (id) => (_text) => { App.messages.editMessage(id, text) },
  deleteMessage: (id) => () => { App.messages.deleteMessage(id) }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
