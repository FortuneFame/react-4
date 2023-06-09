import React from 'react';
import Count from './Count';
import MyEvents from './MyEvents';

const Content = () => {
    const data = { title: "Content", describe: "This is a description" };
    return (
        <div className='content'>
            <h1>{data.title}</h1>
            <p>{data.describe}</p>
            <Count initialValue={0} />
            <MyEvents />
        </div>
    );
};

export default Content;