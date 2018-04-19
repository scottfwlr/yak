import { NEW, SET, CLR } from 'actions/cable';

export default (prevState = [], { errors: actions }) => {
  if (!actions) return prevState;
  if (!actions.concat) actions = [].concat(actions);
  let state = [].concat(prevState);

  actions.forEach( ({ type, error }) => {
    switch (type) {
      case NEW:
      case SET:
        state = error;
        break;
      case CLR:
        state = [];
        break;
    }
  })
  return state;
}

