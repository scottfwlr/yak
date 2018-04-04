import { merge } from 'lodash';
import { RECEIVE_CHANNELS } from 'actions/channel_actions';
import { RECEIVE_MESSAGE, DELETE_MESSAGE } from 'actions/message_actions';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, id, channelId;

  switch(action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels);

    case RECEIVE_MESSAGE:
      newState = merge({}, state);
      ({ id, channelId } = Object.values(action.message)[0]);
      newState[channelId].messages.push(id)
      return newState;

    case DELETE_MESSAGE:
      newState = merge({}, state);
      ({ id, channelId } = action);
      const messages = newState[channelId].messages;
      messages.splice(messages.indexOf(id), 1);
      return newState;

    default:
      return state;
  }
};

export default channelReducer;