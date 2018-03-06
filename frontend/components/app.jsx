import React from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from 'session/header_nav';
import SignupFormContainer from 'users/signup_form_container';
import LoginFormContainer from 'session/login_form_container';

const App = ({ store }) => (
  <div id='app'>
    <h1>Yak!</h1>
    <HeaderNav />
    <Route path='/login' component={LoginFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
