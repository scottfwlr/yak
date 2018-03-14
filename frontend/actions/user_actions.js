import * as UserUtils from 'util/user_api_util';
import { receiveErrors, clearErrors } from 'actions/error_actions';
import { receiveCurrentUser } from 'actions/session_actions';

export const requestUser = (id) => (dispatch) => (
  UserUtils.fetchUser(id).then(
    (payload) => dispatch(receiveUser(payload))
  )
);

export const requestUsers = () => (dispatch) => (
  UserUtils.fetchUsers().then(
    (payload) => dispatch(receiveUsers(payload))
  )
);

export const signUp = (user) => (dispatch) => (
  UserUtils.createUser(user).then(
    (payload) => {
      dispatch(receiveUser(payload));
      dispatch(receiveCurrentUser(payload));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
