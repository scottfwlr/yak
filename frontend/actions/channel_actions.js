import * as ChannelApiUtil from 'util/channel_api_util';
import { receiveMessages } from 'actions/message_actions';
import { receiveUsers } from 'actions/user_actions';
import { receiveErrors } from 'actions/error_actions';

export const requestChannels = () => (dispatch) => (
  ChannelApiUtil.fetchChannels().then(
    ({ channels, messages, users }) => {
      dispatch(receiveChannels(channels))
      dispatch(receiveMessages(messages))
      dispatch(receiveUsers(users))
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const requestChannel = id => dispatch => (
  ChannelApiUtil.fetchChannel(id).then(
    ({ channels, messages, users }) => {
      dispatch(receiveChannels(channels))
      dispatch(receiveMessages(messages))
      dispatch(receiveUsers(users))
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);


export const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';