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
