// channel_header.jsx
import React from 'react';
import { connect } from 'react-redux';
import { logOut } from 'actions/session_actions';

const ChannelHeader = ({ channel }) => (
  <div className='channel-header'>
    <div className='channel-header-info'>
      <div className='channel-header-title-box'>
        <p className='channel-header-title'>
          { channel.name }
        </p>
      </div>
      <div className='channel-details-box'>
        <ul className='channel-details'>
          <li className='channel-details-item c-d-i-stars'>

          </li>
          <li className='channel-details-item c-d-i-members'>
            { channel.members.length }
          </li>
          <li className='channel-details-item c-d-i-pins'>

          </li>          
          <li className='channel-details-item c-d-i-topic'>
            { channel.topic }
          </li>
        </ul>
      </div>
    </div>
    <div className='channel-details-settings-search'>
      <div></div>
    </div>
  </div>
);

const mapStateToProps = ({ entities: { channels } }, { channelId }) => ({
  channel: channels[channelId]
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelHeader);