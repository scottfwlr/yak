import React from 'react';

import { connect } from 'react-redux';
import createCableSubscribers from 'util/action_cable_util_alt';
import { requestChannels } from 'actions/channel_actions';

import ChannelsIndexContainer from 'channels/channels_index_container';
import Channel from 'channels/channel';


class MainChat extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    createCableSubscribers(dispatch);
    dispatch(requestChannels());
  }

  render() {
    return (
      <main className='main-chat'>
        <ChannelsIndexContainer />
        <Channel />
      </main>
    );
  }
}



export default connect()(MainChat);
