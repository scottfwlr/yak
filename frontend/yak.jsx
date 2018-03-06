import React from 'react';
import ReactDOM from 'react-dom';

import { createUser, fetchUser } from 'util/user_api_util';
import { createSession, destroySession } from 'util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // TESTING
  window.createUser = createUser;
  window.fetchUser = fetchUser;
  window.createSession = createSession;
  window.destroySession = destroySession;

  ReactDOM.render(<h1>Yak</h1>, root);
});
