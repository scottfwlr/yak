import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'actions/session_actions';

const HeaderNav = ({ currentUser, logOut }) => {
  return currentUser ? (
    <header>
      <button onClick={ logOut }>Log out</button>
    </header>
  ) : (
    <header>
      <Link to='/signup'>Sign up</Link>
      &nbsp; or &nbsp;
      <Link to='/login'>Log in</Link>
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
