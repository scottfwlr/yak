import React from 'react';
import { AuthRoute } from 'util/route_util';
import HeaderNav from 'session/header_nav';
import SignupFormContainer from 'users/signup_form_container';
import LoginFormContainer from 'session/login_form_container';

const App = ({ store }) => (
  <div id='app'>
    <h1>Yak!</h1>
    <HeaderNav />
    <AuthRoute path='/login' exact  component={ LoginFormContainer } />
    <AuthRoute path='/signup' exact component={ SignupFormContainer } />
  </div>
);

export default App;
