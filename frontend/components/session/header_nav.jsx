import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'actions/session_actions';

const HeaderNav = ({ loggedIn, currentUser, logOut }) => {
  return loggedIn ? (
    <div className='session-header-nav'>
      <p>You are logged in as { currentUser['email'] }  </p>
      <button onClick={ logOut }>Log out</button>
    </div>
  ) : (
    <div className='session-header-nav'>
      <Link className='session-header-nav-link' to='/signup'>Sign up</Link>
      <Link className='session-header-nav-link' to='/login'>Log in</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
