import { merge } from 'lodash';
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from 'actions/message_actions';

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      return merge({}, state, action.message);
    case RECEIVE_MESSAGES:
      return merge({}, state, action.messages);
    default:
      return state;
  }
}

export default messageReducer;