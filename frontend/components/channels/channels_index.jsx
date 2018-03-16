// channels_index.jsx
import React from 'react';
import ChannelsIndexItem from 'channels/channels_index_item';
import { connect } from 'react-redux';
import { changeChannel } from 'actions/session_actions';

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


// class ChannelsIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     if (!this.props.currentChannelId) {
//       if (this.props.channels) {
//         this.props.changeChannel(Object.keys(this.props.channels)[0]);
//       }
//     }
//   }

//   render() {
//     const { channels, changeChannel } = this.props;
//     return (
//       <ul className='channels-index'>
//         {
//           Object.values(channels).map(channel => (
//             <ChannelsIndexItem 
//               channel={ channel }
//               changeChannel={ changeChannel } 
//               key={ channel.id }
//             />
//           ))
//         }
//       </ul>
//     );
//   }

// }

// const mapStateToProps = ({ session: { currentChannelId } }) => ({
//   currentChannelId
// })


// export default connect(mapStateToProps)(ChannelsIndex);