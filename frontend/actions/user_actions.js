import * as UserUtils from 'util/user_api_util';
import { receiveError } from 'actions/error_actions';
import { receiveCurrentUser } from 'actions/session_actions';

export const requestUser = (id) => (dispatch) => (
  UserUtils.fetchUser(id).then(
    (payload) => dispatch(receiveUser(payload))
  )
);

export const signUp = (user) => (dispatch) => (
  UserUtils.createUser(user).then(
    (payload) => {
      dispatch(receiveUser(payload));
      dispatch(receiveCurrentUser(payload));
    },
    (err) => dispatch(receiveError(err.responseJSON))
  )
);

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const RECEIVE_USER = 'RECEIVE_USER';
