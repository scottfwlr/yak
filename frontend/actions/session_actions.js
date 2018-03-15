import * as SessionUtils from 'util/session_api_util';
import { receiveErrors, clearErrors } from 'actions/error_actions';

export const logIn = (params) => (dispatch) => (
  SessionUtils.createSession(params).then(
    (payload) => {
      dispatch(receiveCurrentUser(payload));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logOut = () => (dispatch) => (
  SessionUtils.destroySession().then(
    () => {
      App.unsubscribeAll();
      App.cable.disconnect();
      dispatch(removeCurrentUser());
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const receiveCurrentUser = (currentUserId) => ({
  type: RECEIVE_CURRENT_USER,
  currentUserId
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const changeChannel = (currentChannelId) => ({
  type: CHANGE_CHANNEL,
  currentChannelId
});

export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';