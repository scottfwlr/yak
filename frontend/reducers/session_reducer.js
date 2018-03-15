import { merge } from 'lodash';
import { 
  RECEIVE_CURRENT_USER, 
  REMOVE_CURRENT_USER,
  CHANGE_CHANNEL
} from 'actions/session_actions';


const sessionReducer = (state = {currentUserId:null, currentChannelId:null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUserId: action.currentUserId });
    case REMOVE_CURRENT_USER:
      return merge({}, state, { currentUser: null });
    case CHANGE_CHANNEL:
      return merge({}, state, { currentChannelId: action.currentChannelId })
    default:
      return state;
  }
};

export default sessionReducer;
