import { fetchState } from 'util/api_util';
import { STATE_CHANGE, SET } from 'actions/cable';

export const requestState = () => (dispatch) => (
  fetchState().then(
    ({ channels, messages, users }) => {
      const currentChannel = Number(Object.keys(channels)[0]);
      dispatch({ type: STATE_CHANGE, source: 'requestState',
        channels: { type: SET, channels },
        messages: { type: SET, messages },
         session: { type: SET, currentChannel },
           users: { type: SET, users }
      })
    },
    (err) => {
      dispatch({ type: STATE_CHANGE, source: 'requestState',
        errors: { type: NEW, error: err.responseJSON }
      })
    }
  )
);
