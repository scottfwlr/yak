// channel.jsx

import ChannelHeader from 'channels/channel_header';
import ChannelChatContainer from 'channels/channel_chat_container';
import ChatBox from 'chat/chatbox';

const Channel = ({ channel }) => (
  <div className='channel-chat'>
    <ChannelHeader channel={ channel }/>
    <ChannelChatContainer channel={ channel.name }/>
    <ChatBox channel={ channel.name } />
  </div>
);

export default Channel;