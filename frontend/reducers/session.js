import { SET, CLR } from 'actions/cable';

const baseState = { currentChannel: null, currentUser: null };

export default (prevState = baseState, { session: actions }) => {
  if (!actions) return prevState;
  if (!actions.concat) actions = [].concat(actions);
  let state = Object.assign({}, prevState);

  actions.forEach( ({ type, currentChannel, currentUser }) => {
    switch(type) {
      case SET:
        state.currentChannel = (currentChannel || state.currentChannel);
        state.currentUser = (currentUser || state.currentUser);
        break;
      case CLR:
        state = baseState;
        break;
    }
  });
  return state;
}