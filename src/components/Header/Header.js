import React from 'react';

function Header({ data }) {
  return (
    <div className='header'>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Header;