import { STATE_CHANGE, CLR, NEW } from 'actions/cable';

export const receiveErrors = (error) => ({
  type: STATE_CHANGE,
  errors: [
    { type: NEW, error }
  ]
});

export const clearErrors = () => ({
  type: STATE_CHANGE,
  errors: [
    { type: CLR }
  ]
});

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
