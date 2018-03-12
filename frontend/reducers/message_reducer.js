import { merge } from 'lodash';
import { DELETE_MESSAGE, RECEIVE_MESSAGES, RECEIVE_MESSAGE } from 'actions/message_actions';

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DELETE_MESSAGE:
      const newState = merge({}, state);
      debugger
      delete newState[action.id];
      return newState;
    case RECEIVE_MESSAGE:
      return merge({}, state, action.message);
    case RECEIVE_MESSAGES:
      return merge({}, state, action.messages);
    default:
      return state;
  }
};

export default messageReducer;
