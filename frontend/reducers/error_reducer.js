import { merge } from 'lodash';
import { RECEIVE_ERROR } from 'actions/error_actions';

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERROR:
      return action.errors;
    default:
      return [];
  }
};

export default errorReducer;
