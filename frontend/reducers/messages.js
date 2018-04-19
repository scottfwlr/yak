import { NEW, DEL, UPD, SET } from 'actions/cable';

export default (prevState = {}, { messages: actions }) => {
  if (!actions) return prevState;
  if (!actions.concat) actions = [].concat(actions);
  let state = Object.assign({}, prevState);

  actions.forEach( ({ type, message, messages }) => {
    switch (type) {
      case SET:
        state = messages;
        break;
      case NEW:
      case UPD:
        state[message.id] = message;
        break;
      case DEL:
        delete state[message.id];
        break;
    }
  });
  return state;
} 
