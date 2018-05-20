import React from 'react';

import { connect } from 'react-redux';
import createCableSubscribers from 'util/action_cable_util';
import { requestState } from 'actions/state_actions';

import ChannelsIndexContainer from 'channels/channels_index_container';
import Channel from 'channels/channel';


class MainChat extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    createCableSubscribers(dispatch);
    dispatch(requestState());
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
