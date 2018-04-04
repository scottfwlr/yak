// channels_index.jsx
import React from 'react';
import ChannelsIndexItem from 'channels/channels_index_item';
import { connect } from 'react-redux';
import { changeChannel } from 'actions/session_actions';

const ChannelsIndex = ({ channels, changeChannel }) => (
  <div className='channels-container'>
    <p className='channels-browser-modal'>Channels</p>
    <ul className='channels-index'>
      {
        Object.values(channels).map(channel => (
          <ChannelsIndexItem 
            channel={ channel }
            changeChannel={ changeChannel } 
            key={ channel.id }
          />
        ))
      }
    </ul>
  </div>
);

export default ChannelsIndex;