import React from 'react';
import { connect } from 'react-redux';

import Header from 'header';
import { AuthRoute, ProtectedRoute } from 'util/route_util';
import SignupFormContainer from 'users/signup_form_container';
import LoginFormContainer from 'session/login_form_container';
import CredentialsFormError from 'session/credentials_form_error';

const App = ({ store, errors }) => (
  <div id='app'>
    <Header className='header-nav' />
    <main>
      <ProtectedRoute path='/' exact  component={ 'div' } />
      {
        errors.map(err => <CredentialsFormError errorMessage={ err } />)
      }
      <AuthRoute path='/login' exact  component={ LoginFormContainer } />
      <AuthRoute path='/signup' exact component={ SignupFormContainer } />
    </main>
  </div>
);

export default connect(
  state => ({
    errors: state.errors
  }),
  null
)(App);
