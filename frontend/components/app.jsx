import React from 'react';
import { AuthRoute, ProtectedRoute } from 'util/route_util';
import HeaderNav from 'session/header_nav';
import SignupFormContainer from 'users/signup_form_container';
import LoginFormContainer from 'session/login_form_container';

const App = ({ store }) => (
  <div id='app'>
    <header className='nav-header'>
      <HeaderNav />
    </header>
    <main>
      <ProtectedRoute path='/' exact  component={ 'div' } />
      <AuthRoute path='/login' exact  component={ LoginFormContainer } />
      <AuthRoute path='/signup' exact component={ SignupFormContainer } />
    </main>
  </div>
);

export default App;
