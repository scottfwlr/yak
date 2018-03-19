// channels_settings.jsx
import React from 'react';
import { connect } from 'react-redux';

const ChannelsSettings = ({ user }) => (
  <div className='channels-settings'>
    <p className='logged-in-user'>
      { user && user.displayName }
    </p>
  </div>
);

const mapStateToProps = ({ session: { currentUserId }, entities: { users } }) => ({
  user: users[currentUserId]
})

export default connect(mapStateToProps)(ChannelsSettings);