import { combineReducers } from 'redux';
import userReducer from 'reducers/user_reducer';
import messageReducer from 'reducers/message_reducer';
import channelReducer from 'reducers/channel_reducer'

const entityReducer = combineReducers({
  users: userReducer,
  messages: messageReducer,
  channels: channelReducer
});

export default entityReducer;
