import { connect } from 'react-redux';
import CredentialsForm from 'session/credentials_form';
import { signUp } from 'actions/user_actions';
import { clearErrors } from 'actions/error_actions';

const parseCredentials = ({ email, password, displayName, fullName }) => ({
  email, password,
  display_name: displayName,
  full_name: fullName
});

const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'Sign up'
});

const mapDispatchToProps = (dispatch) => ({
  submitCredentials: (credentials) => dispatch(signUp(parseCredentials(credentials))),
  clearErrors: () => dispatch(clearErrors()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsForm);
