import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_USERS } from 'actions/user_actions';


const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.user);
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default userReducer;
