// channels_index_container.js
import React from 'react';
import ChannelsIndex from 'channels/channels_index';
import ChannelsSettings from 'channels/channels_settings';
import { connect } from 'react-redux';


const ChannelsIndexContainer = ({ channel, channels }) => (
  <div className='channels-index-container'>
    <ChannelsSettings />
    <ChannelsIndex 
      channels={ channels } 
      />
  </div>
);

const mapStateToProps = ({ entities: { channels } }) => ({
  channels
});


export default connect(mapStateToProps)(ChannelsIndexContainer);