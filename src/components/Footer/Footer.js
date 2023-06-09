import React from 'react';

function Footer({ data }) {
  return (
    <div className='footer'>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Footer;