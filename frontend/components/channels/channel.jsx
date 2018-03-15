// channel.jsx
import React from 'react';
import { connect } from 'react-redux';
import ChannelHeader from 'channels/channel_header';
import ChannelChatContainer from 'channels/channel_chat_container';
import ChatBox from 'chat/chatbox';

const Channel = ({ channel }) => (
  <div className='channel-chat'>
    <ChannelHeader channel={ channel }/>
    { channel && <ChannelChatContainer channel={ channel }/> }
    <ChatBox channel={ channel } />
  </div>
);

const mapStateToProps = ({ entities: { channels }, session: { currentChannelId } }) => ({
  channel: channels[currentChannelId]
})

export default connect(mapStateToProps)(Channel);