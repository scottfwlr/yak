import React from 'react';
import ChatDay from 'chat/chat_day';
import { connect } from 'react-redux';
import { messagesByDates } from 'reducers/selectors';
import { editMessage, deleteMessage } from 'actions/message_actions';



class ChatWindow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const chatWindow = this.props.messagesByDates.map(day => {
      const { date, messageArray } = day;
      return (
        <ChatDay 
          date={ date } 
          allMessagesArray={ messageArray } 
          key={ date }
        />
      );
    });
    return (
      <div className='chat-window'>
        { chatWindow }
      </div>
    );
  }

}

const mapStateToProps = ({ entities: { messages } }) => ({
  messagesByDates: messagesByDates(messages)
});


export default connect(
  mapStateToProps,
  null
)(ChatWindow);
