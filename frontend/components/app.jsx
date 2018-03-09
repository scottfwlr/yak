import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from 'util/route_util';
import MainChat from 'chat/chat';
import SessionForm from 'session/session_form';

const App = ({ store }) => {
  const loggedIn = store.getState().session.currentUser;
  return loggedIn ? (
    <div id='app'>
      <ProtectedRoute path='/' exact  component={ MainChat } />
    </div>
  ) : (
    <div id='app'>
      <ProtectedRoute path='/' exact component= { SessionForm } />
      <SessionForm />
    </div>
  );
}

export default withRouter(App);
