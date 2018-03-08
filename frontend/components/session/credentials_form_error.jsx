import React from 'react';

const CredentialsFormError = ({ errorMessage }) => (
  <span className='credentials-box'>
    { errorMessage }
  </span>
);

export default CredentialsFormError;
