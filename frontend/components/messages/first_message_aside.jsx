import React from 'react';

const FirstMessageAside = ({ author }) => (
  <div className='chat-message-aside-left'>
    { 
      author ? (
      <img className='profile-pic chat-message-profile-pic'
        src={ window.profilePicLookup[author.profilePicUrl] || window.profilePicLookup['/assets/stormtrooper.png'] }
        alt={ author.fullName }
        />
      ) : null
    }
  </div>
);

export default FirstMessageAside;