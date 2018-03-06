import React from 'react';
import SignupFormContainer from 'users/signup_form_container';
import LoginFormContainer from 'session/login_form_container';

const App = (props) => (
  <div>
    <h1>Yak!</h1>
    <SignupFormContainer />
    <LoginFormContainer />
  </div>
);

export default App;
