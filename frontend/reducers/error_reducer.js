import { merge } from 'lodash';
import { RECEIVE_ERROR, CLEAR_ERRORS } from 'actions/error_actions';

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERROR:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
