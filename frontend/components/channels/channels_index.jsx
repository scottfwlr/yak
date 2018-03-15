// channels_index.jsx
import React from 'react';
import ChannelsIndexItem from 'channels/channels_index_item';

const ChannelsIndex = ({ channels, changeChannel }) => (
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
);

export default ChannelsIndex;