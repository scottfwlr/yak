import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from 'actions/session_actions';


const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default sessionReducer;