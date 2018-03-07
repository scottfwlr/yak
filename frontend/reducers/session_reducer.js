import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from 'actions/session_actions';

const nullUser = { currentUser: null }

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    case REMOVE_CURRENT_USER:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
