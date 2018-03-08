import { combineReducers } from 'redux';
import userReducer from 'reducers/user_reducer';
import messageReducer from 'reducers/message_reducer';

const entityReducer = combineReducers({
  users: userReducer,
  messages: messageReducer
});

export default entityReducer;
