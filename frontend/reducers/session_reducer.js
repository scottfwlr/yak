import { merge } from 'lodash';
import { RECEIVE_CHANNELS } from 'actions/channel_actions';
import { 
  RECEIVE_CURRENT_USER, 
  REMOVE_CURRENT_USER,
  CHANGE_CHANNEL
} from 'actions/session_actions';


const baseState = { currentUserId: null, currentChannelId: null }

const sessionReducer = (state = baseState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      const currentChannelId = state.currentChannelId;
      if (currentChannelId) {
        return state; 
      }
      else {
        const newChannel = { currentChannelId: Number(Object.keys(action.channels)[0]) };
        return merge({}, state, newChannel)
      }
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUserId: action.currentUserId });
    case REMOVE_CURRENT_USER:
      return merge({}, state, { currentUserId: null });
    case CHANGE_CHANNEL:
      return merge({}, state, { currentChannelId: action.currentChannelId })
    default:
      return state;
  }
};

export default sessionReducer;
