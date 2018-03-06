import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/store';
import Root from 'components/root';

// TESTING
// import { createUser, fetchUser } from 'util/user_api_util';
// import { createSession, destroySession } from 'util/session_api_util';
//
// import { logIn, logOut } from 'actions/session_actions';
// import { signUp, requestUser } from 'actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TESTING
  // window.createUser = createUser;
  // window.fetchUser = fetchUser;
  // window.createSession = createSession;
  // window.destroySession = destroySession;

  // window.logIn = logIn;
  // window.logOut = logOut;
  // window.signUp = signUp;
  // window.requestUser = requestUser;
  //
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});
