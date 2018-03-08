import * as MessageApiUtil from 'util/message_api_util';


export const requestMessages = () => (dispatch) => (
  MessageApiUtil.fetchMessages().then(
    (payload) => dispatch(receiveMessages(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
)


export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';