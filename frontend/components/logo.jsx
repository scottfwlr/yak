import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className='logo-link'>
    {/*<img src='logo.png' alt='yak logo'/>*/}
    yak
  </Link>
);

export default Logo;
