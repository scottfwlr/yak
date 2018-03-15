import { merge } from 'lodash';
import { RECEIVE_CHANNELS } from 'actions/channel_actions';
import { RECEIVE_MESSAGE } from 'actions/message_actions';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_MESSAGE:
      const { id, channelId } = Object.values(action.message)[0];
      return merge({}, state, {
        [channelId]: { 
          messages: [...state[channelId].messages, id] 
        }
      });
    default:
      return state;
  }
};

export default channelReducer;