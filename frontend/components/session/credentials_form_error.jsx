import React from 'react';
import { connect } from 'react-redux';


const CredentialsFormError = ({ errors }) => {
  return errors.length ? (
    <span className='credentials-box credentials-error'>
      <ul className='credentials-error-ul'>
        {
          errors.map((err, idx) => (<li key={ idx }>{ err }</li>))
        }
      </ul>
    </span>
  ) : (
    null
  );
};

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsFormError);
