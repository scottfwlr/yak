import { combineReducers } from 'redux';
import users from 'reducers/users';
import channels from 'reducers/channels';
import messages from 'reducers/messages';
import errors from 'reducers/errors';
import session from 'reducers/session';

export default combineReducers({
  users, channels, messages,
  errors, session
});