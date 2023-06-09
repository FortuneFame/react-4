import React from 'react';

class HeaderClass extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='header-class'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    );
  }
}

export default HeaderClass;