import { merge } from 'lodash';
import { RECEIVE_MESSAGES } from 'actions/message_actions';

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, state, action.messages);
    default:
      return state;
  }
}

export default messageReducer;