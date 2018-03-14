import { merge } from 'lodash';
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from 'actions/channel_actions';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels)
    default:
      return state;
  }
};

export default channelReducer;