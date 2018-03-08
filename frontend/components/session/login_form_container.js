import { connect } from 'react-redux';
import CredentialsForm from 'session/credentials_form';
import { logIn } from 'actions/session_actions';
import { clearErrors } from 'actions/error_actions';



const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'Log in',

});

const mapDispatchToProps = (dispatch) => ({
  submitCredentials: (credentials) => dispatch(logIn(credentials)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsForm);
