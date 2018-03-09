import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { ProtectedRoute } from 'util/route_util';
import MainChat from 'chat/chat';
import SessionForm from 'session/session_form';

const App = ({ store }) => (
  <div id='app'>
    <ProtectedRoute path='/' exact  component={ MainChat } />
    <SessionForm />
  </div>
);

export default withRouter(App);

