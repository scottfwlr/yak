import React from 'react';
import CredentialsFormError from 'session/credentials_form_error';
import LoginFormContainer from 'session/login_form_container';
import SignupFormContainer from 'users/signup_form_container';
import Header from 'header';
import { AuthRoute } from 'util/route_util';
import { withRouter, Switch, Redirect } from 'react-router-dom';


const SessionForm = () => (
  <main>
    <Header className='header-nav' />
    <CredentialsFormError />

    <Switch>
      <AuthRoute path='/signup' exact component={SignupFormContainer} />
      <AuthRoute path='/login' exact component={LoginFormContainer} />
      <Redirect to='/signup' />
    </Switch>
  </main>
);

export default withRouter(SessionForm);
