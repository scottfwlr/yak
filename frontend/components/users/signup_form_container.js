import { connect } from 'react-redux';
import CredentialsForm from 'session/credentials_form';
import { signUp } from 'actions/user_actions';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  submitCredentials: (credentials) => dispatch(signUp(credentials))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsForm);
