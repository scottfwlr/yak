import React from 'react';

const DateLine = ({ date }) => (
  <div className='date-divider'>
    <hr className='date-divider-rule' />
    <p className='date-divider-text'>{ date }</p> 
  </div>
);

export default DateLine;