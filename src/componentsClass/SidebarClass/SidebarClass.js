import React from 'react';

class SidebarClass extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='sidebar-class'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    );
  }
}

export default SidebarClass;