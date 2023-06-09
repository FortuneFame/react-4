import React from 'react';

class FooterClass extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='footer-class'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    );
  }
}

export default FooterClass;