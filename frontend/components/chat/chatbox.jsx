import React from 'react';
import { connect } from 'react-redux';

const handleKeyDown = (channel) => (e) => {
  if (e.key === 'Enter' && !e.getModifierState('Shift')) {
    
    e.preventDefault();
    // TODO: dispatch a state change to insert pendingMessage
    // pendingMessage should scroll too
    App.State.newMessage(e.target.innerText);
    e.target.innerText = "";
  }
}

const clearBreaks = (e) => {
  // browsers tend to insert <br/> in contenteditables
  // this clears them out when they're the only thing there
  // allows our CSS "placeholder for contenteditable" to work
  if (e.target.textContent === "") {
    e.target.textContent = "";
  }
} 

const ChatBox = ({ channel }) => (channel ? (
  <div className='chat-box-text-area'>
    <div className='chat-box-uncontrolled'
      contentEditable
      placeholder='Type a message here...'
      onBlur={ clearBreaks }
      onKeyDown={ handleKeyDown(channel.name) }>
    </div> 
  </div>
) : null);


const mapStateToProps = ({ channels }, ownProps) => ({
  channel: channels[ownProps.channelId]
})


export default connect(mapStateToProps)(ChatBox);