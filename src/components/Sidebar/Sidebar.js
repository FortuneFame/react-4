import React from 'react';

function Sidebar({ data }) {
  return (
    <div className='sidebar'>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Sidebar;