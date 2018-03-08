import { connect } from 'react-redux';
import CredentialsForm from 'session/credentials_form';
import { signUp } from 'actions/user_actions';
import { clearErrors } from 'actions/error_actions';

const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'Sign up'
});

const mapDispatchToProps = (dispatch) => ({
  submitCredentials: (credentials) => dispatch(signUp(credentials)),
  clearErrors: () => dispatch(clearErrors()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsForm);
