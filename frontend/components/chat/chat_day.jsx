import React from 'react';
import { connect } from 'react-redux';
import DateLine from 'chat/date_line';
import MessagesBox from 'chat/messages_box';
import { messageRuns } from 'reducers/selectors';


const ChatDay = ({ date, allMessagesArray, users, deleteMessage, editMessage }) => {

  const nullUser = {
    profilePicUrl: '',
    fullName: '',
    displayName: 'loading...'
  };
  
  const messageBoxes = messageRuns(allMessagesArray).map(messageArray => {
    const [firstMessage, ...messages] = messageArray;
    return (
      <MessagesBox
        author={ users[firstMessage.authorId] || nullUser }
        firstMessage={ firstMessage }
        messages={ messages }
        key={ firstMessage.id }
        deleteMessage={ deleteMessage }
        editMessage={ editMessage }
      />
    );
  });

  return (
    <div className='chat-day-container'>
      <DateLine date={ date } key={ date } />
      { messageBoxes }
    </div>
  );
}

const mapStateToProps = ({ entities: { users } }) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  editMessage: (id) => (_text) => { App.messages.editMessage(id, text) },
  deleteMessage: (id) => () => { App.messages.deleteMessage(id) }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatDay);