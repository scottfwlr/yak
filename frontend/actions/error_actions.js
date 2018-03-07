export const receiveError = (errors) => ({
  type: RECEIVE_ERROR,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';