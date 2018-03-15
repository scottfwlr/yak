// channels_index_container.js
import React from 'react';
import ChannelsIndex from 'channels/channels_index';
import ChannelsSettings from 'channels/channels_settings';
import { changeChannel } from 'actions/session_actions';
import { connect } from 'react-redux';


const ChannelsIndexContainer = ({ channel, channels, changeChannel }) => (
  <div className='channels-index-container'>
    <ChannelsSettings />
    <ChannelsIndex 
      channels={ channels } 
      changeChannel={ changeChannel } />
  </div>
);

const mapStateToProps = ({ entities: { channels } }) => ({
  channels
});

const mapDispatchToProps = dispatch => ({
  changeChannel: (channelId) => () => dispatch(changeChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsIndexContainer);