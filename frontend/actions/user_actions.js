import * as UserUtils from 'util/user_api_util';
import { STATE_CHANGE, NEW, SET, CLR } from 'actions/cable';

export const signUp = (user) => (dispatch) => (
  UserUtils.createUser(user).then(
    (user) => {
      dispatch({ type: STATE_CHANGE,
        users: { type: NEW, user },
        errors: { type: CLR },
        session: { type: SET, currentUser: user.id }
      })
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);
