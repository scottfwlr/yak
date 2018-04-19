// channel_header.jsx
import React from 'react';
import { connect } from 'react-redux';
import { logOut } from 'actions/session_actions';

const ChannelHeader = ({ channel, logOut }) => (
  <div className='channel-header'>
    <div className='channel-header-info'>
      <div className='channel-header-title-box'>
        <p className='channel-header-title'>
          &nbsp;{ channel.name }
        </p>
      </div>
      <div className='channel-details-box'>
        <ul className='channel-details'>
          <li className='channel-details-item c-d-i-stars'>
            <i className="far fa-star"></i>
          </li>
          <li className='channel-details-item c-d-i-members'>
            <i className="far fa-user-circle"></i>
            &nbsp;
            { channel.members.length }
          </li>
          <li className='channel-details-item c-d-i-pins'>
            <i className="fas fa-thumbtack"></i>
          </li>          
          <li className='channel-details-item c-d-i-topic'>
            { channel.topic }
          </li>
        </ul>
      </div>
    </div>
    <div className='channel-header-settings-search'>
      <ul className='channel-header-settings-pre-search'>
        {/*<li><i className="fas fa-phone c-h-s-s-item"></i></li>*/}
        {/*<li><i className="fas fa-info-circle c-h-s-s-item"></i></li>*/}
        {/*<li><i className="fas fa-cog c-h-s-s-item"></i></li>*/}
      </ul>
      <div className='channel-header-search-bar'>
        <i className="fas fa-search channel-header-search-bar-icon"></i>
        <input className='channel-header-search-bar-input'
          type='text' />
      </div>
      <ul className='channel-header-settings-post-search'>
        {/*<li><i className="fas fa-at c-h-s-s-item"></i></li>*/}
        {/*<li><i className="far fa-star c-h-s-s-item"></i></li>*/}
        <li onClick={ logOut }><i className="fas fa-sign-out-alt c-h-s-s-item"></i></li>
        <li><i className="fas fa-ellipsis-v c-h-s-s-item"></i></li>
      </ul>
    </div>
  </div>
);

const mapStateToProps = ({ channels }, { channelId }) => ({
  channel: channels[channelId]
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelHeader);