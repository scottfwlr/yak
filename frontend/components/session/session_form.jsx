import React from 'react';
import CredentialsFormError from 'session/credentials_form_error';
import LoginFormContainer from 'session/login_form_container';
import SignupFormContainer from 'users/signup_form_container';
import Header from 'header';
import { AuthRoute } from 'util/route_util';


const SessionForm = () => (
  <main>
    <Header className='header-nav' />
    <CredentialsFormError />
    <AuthRoute path='/login' exact  component={ LoginFormContainer } />
    <AuthRoute path='/signup' exact component={ SignupFormContainer } />
  </main>
);

export default SessionForm;
