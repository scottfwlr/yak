import React from 'react';
import ChatDay from 'chat/chat_day';


const ChatWindow = ({ messagesByDates }) => (
  <div className='chat-window'>
  {
    messagesByDates.map(({ date, messageArray }) => (
      <ChatDay 
        key={ date } 
        date={ date }
        messageArray={ messageArray }
        />
    ))
  }
);


export default ChatWindow;