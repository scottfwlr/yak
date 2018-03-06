import { combineReducers } from 'redux';
import entityReducer from 'reducers/entity_reducer';
import errorReducer from 'reducers/error_reducer';
import sessionReducer from 'reducers/session_reducer';

export default combineReducers({
  entities: entityReducer,
  errors: errorReducer,
  session: sessionReducer
});
