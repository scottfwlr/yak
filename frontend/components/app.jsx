import React from 'react';
import { AuthRoute, ProtectedRoute } from 'util/route_util';
import Header from 'header';
import SignupFormContainer from 'users/signup_form_container';
import LoginFormContainer from 'session/login_form_container';

const App = ({ store }) => (
  <div id='app'>
    <Header className='header-nav' />
    <main>
      <ProtectedRoute path='/' exact  component={ 'div' } />
      <AuthRoute path='/login' exact  component={ LoginFormContainer } />
      <AuthRoute path='/signup' exact component={ SignupFormContainer } />
    </main>
  </div>
);

export default App;
