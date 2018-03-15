import React from 'react';

import { connect } from 'react-redux';
import createCableSubscribers from 'util/action_cable_util';
import { requestChannels } from 'actions/channel_actions';

import ChannelsIndexContainer from 'channels/channels_index_container';
import Channel from 'channels/channel';


class MainChat extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    createCableSubscribers(dispatch, 'MessagesChannel');
    dispatch(requestChannels());
  }

  render() {
    return (
      <main>
        <ChannelsIndexContainer />
        <Channel />
      </main>
    );
  }
}

export default connect()(MainChat);
