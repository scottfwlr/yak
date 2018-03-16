import { merge } from 'lodash';
import { RECEIVE_CHANNELS } from 'actions/channel_actions';
import { RECEIVE_MESSAGE, DELETE_MESSAGE } from 'actions/message_actions';

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
    case DELETE_MESSAGE:
      const { id: delId, channelId: delChannelId } = action;
      return merge({}, state, {
        [delChannelId]: { 
          messages: state[delChannelId].messages.filter(el => el !== delId)
        }
      });
    default:
      return state;
  }
};

export default channelReducer;