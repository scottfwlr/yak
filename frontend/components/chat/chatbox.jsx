import React from 'react';
import { connect } from 'react-redux';

const handleKeyDown = (channel) => (e) => {
  if (e.key === 'Enter' && !e.getModifierState('Shift')) {
    e.preventDefault();
    App.channels[channel].newMessage(e.target.innerText);
    e.target.innerText = "";
  }
}

const ChatBox = ({ channel }) => (channel ? (
  <div className='chat-box-text-area chat-box-uncontrolled'
    contentEditable
    onKeyDown={ handleKeyDown(channel.name) }>
  </div> 
) : null);


const mapStateToProps = ({ entities: { channels } }, ownProps) => ({
  channel: channels[ownProps.channelId]
})


export default connect(mapStateToProps)(ChatBox);