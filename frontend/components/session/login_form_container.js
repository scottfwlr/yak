import { connect } from 'react-redux';
import CredentialsForm from 'session/credentials_form';
import { logIn } from 'actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  submitCredentials: (credentials) => dispatch(logIn(credentials)),

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsForm);
