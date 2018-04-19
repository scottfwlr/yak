// channel.jsx
import React from 'react';
import { connect } from 'react-redux';
import ChannelHeader from 'channels/channel_header';
import ChannelChat from 'channels/channel_chat';
import ChatBox from 'chat/chatbox';

const Channel = ({ currentChannel }) => ( 
  currentChannel ? (
    <div className='channel-chat'>
      <ChannelHeader channelId={ currentChannel }/>
      <ChannelChat channelId={ currentChannel }/>
      <ChatBox channelId={ currentChannel } />
    </div>
  ) : (
    <div className='channel-chat'></div>
  )
);

const mapStateToProps = ({ session: { currentChannel } }) => ({
  currentChannel
})

export default connect(mapStateToProps)(Channel);