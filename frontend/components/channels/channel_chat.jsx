// channel_chat_container.js
import React from 'react';
import { connect } from 'react-redux';
import { messagesByDates } from 'reducers/selectors';
import ChatDay from 'chat/chat_day';


class ChannelChat extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToBottom() {
    const chat = document.getElementById('chat-window');
    chat.scrollTop = chat.scrollHeight;
  }
  
  scrollToBottomTimeout() {
    window.setTimeout(this.scrollToBottom, 5);
  }

  filterMessage

  componentDidUpdate(prevProps) {
    if (prevProps.channelId !== this.props.channelId) {
      this.scrollToBottomTimeout();
    }
  }

  render() {

    const myMessages = this.props.channel.messages.map(id => {
      return this.props.messages[id];
    }).filter(el => {
      return Boolean(el)
    });
    
    return (
      <div className='chat-window' id='chat-window'>
        {
          messagesByDates(myMessages).map(({ date, messageArray }) => (
            <ChatDay 
              key={ date } 
              date={ date }
              messageArray={ messageArray }
              />
          ))
        }
      </div>
    );
  }

}

const mapStateToProps = ({ entities: { channels, messages } }, { channelId }) => ({
  channel: channels[channelId],
  messages
});

export default connect(mapStateToProps)(ChannelChat);