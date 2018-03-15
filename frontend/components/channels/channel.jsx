// channel.jsx
import React from 'react';
import { connect } from 'react-redux';
import ChannelHeader from 'channels/channel_header';
import ChannelChat from 'channels/channel_chat';
import ChatBox from 'chat/chatbox';

const Channel = ({ currentChannelId }) => ( 
  currentChannelId ? (
    <div className='channel-chat'>
      <ChannelHeader channelId={ currentChannelId }/>
      <ChannelChat channelId={ currentChannelId }/>
      <ChatBox channelId={ currentChannelId } />
    </div>
  ) : null
);

const mapStateToProps = ({session: { currentChannelId } }) => ({
  currentChannelId
})

export default connect(mapStateToProps)(Channel);