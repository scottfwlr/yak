import * as SessionUtils from 'util/session_api_util';
import { receiveError } from 'actions/error_actions';

export const logIn = (params) => (dispatch) => (
  SessionUtils.createSession(params).then(
    (payload) => dispatch(receiveCurrentUser(payload)),
    (err) => dispatch(receiveError(err.responseJSON))
  )
);

export const logOut = () => (dispatch) => (
  SessionUtils.destroySession().then(
    () => dispatch(removeCurrentUser()),
    (err) => dispatch(receiveError(err.responseJSON))
  )
);

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
