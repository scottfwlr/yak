import { combineReducers } from 'redux';
import userReducer from 'reducers/user_reducer';

const entityReducer = combineReducers({
  users: userReducer
});

export default entityReducer;
