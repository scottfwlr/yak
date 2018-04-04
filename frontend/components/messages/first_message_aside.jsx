import React from 'react';

const FirstMessageAside = ({ author }) => (
  <div className='chat-message-aside-left'>
    { 
      author ? (
      <img className='profile-pic chat-message-profile-pic'
        src={ window.profilePicLookup[author.profilePicUrl] }
        alt={ author.fullName }
        />
      ) : null
    }
  </div>
);

export default FirstMessageAside;