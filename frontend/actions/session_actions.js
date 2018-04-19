import * as SessionUtils from 'util/session_api_util';
import { STATE_CHANGE, CLR, NEW, SET } from 'actions/cable';
import { receiveErrors, clearErrors } from 'actions/error_actions';

export const logIn = (params) => (dispatch) => (
  SessionUtils.createSession(params).then(
    (currentUser) => {
      dispatch({ type: STATE_CHANGE,
        session: { type: SET, currentUser },
        errors: { type: CLR }
      })
    },
    (err) => {
      dispatch({ type: STATE_CHANGE,
        errors: { type: SET, error: err.responseJSON }
      })
    }
  )
);

export const logOut = () => (dispatch) => (
  SessionUtils.destroySession().then(
    () => {
      App.State.unsubscribe();
      App.cable.disconnect();
      dispatch({ type: STATE_CHANGE, 
        session: { type: CLR },
        errors: { type: CLR }
      });
    },
    (err) => {
      dispatch({ type: STATE_CHANGE,
        errors: { type: NEW, error: err.responseJSON }
      });
    }
  )
);


export const changeChannel = (currentChannel) => ({
  type: STATE_CHANGE,
  session: { type: SET, currentChannel }
});
