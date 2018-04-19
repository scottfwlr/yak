import { NEW, DEL, UPD, SET } from 'actions/cable';

export default (prevState = {}, { channels: actions }) => {
  if (!actions) return prevState;
  if (!actions.concat) actions = [].concat(actions);
  let state = Object.assign({}, prevState);

  actions.forEach( ({ type, channel, channels }) => {
    switch (type) {
      case SET:
        state = channels;
        break;
      case NEW:
      case UPD:
        state[channel.id] = channel;
        break;
      case DEL:
        delete state[channel.id];
        break;
    }
  });
  return state;
}