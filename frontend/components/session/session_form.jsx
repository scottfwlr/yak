import React from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import CredentialsFormError from 'session/credentials_form_error';
import LoginFormContainer from 'session/login_form_container';
import SignupFormContainer from 'users/signup_form_container';
import Header from 'header';
import { ProtectedRoute, AuthRoute } from 'util/route_util';


const SessionForm = () => (
  <main>
    <Header className='header-nav' />
    <CredentialsFormError />
    <Switch>
      <AuthRoute path='/signup' exact component={SignupFormContainer} />
      <AuthRoute path='/login' exact component={LoginFormContainer} />
      <Redirect to='/login' />
    </Switch>

  </main>
);

export default withRouter(SessionForm);
