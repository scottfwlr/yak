// channel_chat_container.js
import React from 'react';
import { connect } from 'react-redux';
import { messagesByDates } from 'reducers/selectors';
import ChatDay from 'chat/chat_day';


const ChannelChat = ({ channel, messages }) => {
  const messagesByDate = messagesByDates(channel.messages.map(id => messages[id]));
  return (
    <div className='chat-window'>
      {
        messagesByDate.map(({ date, messageArray }) => (
          <ChatDay 
            key={ date } 
            date={ date }
            messageArray={ messageArray }
            />
        ))
      }
    </div>
  );
};

const mapStateToProps = ({ entities: { channels, messages } }, { channelId }) => ({
  channel: channels[channelId],
  messages
});

export default connect(mapStateToProps)(ChannelChat);