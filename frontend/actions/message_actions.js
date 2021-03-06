import * as MessageApiUtil from 'util/message_api_util';
import { idFromMessage } from 'reducers/selectors';
import { receiveErrors } from 'actions/error_actions';


export const requestMessages = () => (dispatch) => (
  MessageApiUtil.fetchMessages().then(
    (payload) => dispatch(receiveMessages(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    id
});

export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
