import * as ChannelApiUtil from 'util/channel_api_util';
import { receiveErrors } from 'actions/error_actions';

export const requestChannels = () => (dispatch) => (
  ChannelApiUtil.fetchChannels().then(
    (payload) => dispatch(receiveChannels(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const requestChannel = id => dispatch => (
  ChannelApiUtil.fetchChannel(id).then(
    (payload) => {
      dispatch(receiveChannel(payload))
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);


export const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';