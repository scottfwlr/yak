import React from 'react';
import { connect } from 'react-redux';
import MainChat from 'chat/chat';
import SessionForm from 'session/session_form';
import { HashRouter } from 'react-router-dom';


const App = ({ loggedIn }) => (
  <div id='app'>
    <HashRouter>
      { loggedIn ? <MainChat /> : <SessionForm /> }
    </HashRouter>
  </div>
);

const mapStateToProps = ({ session: { currentUserId } }) => ({
  loggedIn: Boolean(currentUserId)
});

export default connect(mapStateToProps)(App);
