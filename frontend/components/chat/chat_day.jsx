import React from 'react';
import DateLine from 'chat/date_line';
import MessagesBox from 'chat/messages_box';
import { messageRuns } from 'reducers/selectors';


const ChatDay = ({ date, messageArray }) => (
  <div className='chat-day-container'>
    <DateLine date={ date } key={ date } />
    { messageArray &&
    messageRuns(messageArray).map(([firstMessage, ...messages]) => (
      <MessagesBox
        firstMessage={ firstMessage }
        messages={ messages }
        key={ firstMessage.id }
      />
    ))
    }
  </div>
);

export default ChatDay;