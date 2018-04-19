import { SET, UPD, NEW, DEL } from 'actions/cable';

export default (prevState = {}, { users: actions }) => {
  if (!actions) return prevState;
  if (!actions.concat) actions = [].concat(actions);
  let state = Object.assign({}, prevState);

  actions.forEach( ({ type, user, users }) => {
    switch (type) {
      case SET:
        state = users;
        break;
      case NEW:
      case UPD:
        state[user.id] = user;
        break;
      case DEL:
        delete state[user.id];
        break;
    }
  });
  return state;
}