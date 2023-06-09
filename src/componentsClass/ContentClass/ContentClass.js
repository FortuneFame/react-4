import React from 'react';
import Count from './Count';
import MyEvents from './MyEventsClass';

class ContentClass extends React.Component {
    data = { title: "Content", describe: "This is a description" };

    render() {
        return (
            <div className='content-class'>
                <h1>{this.data.title}</h1>
                <p>{this.data.describe}</p>
                <Count initialValue={0} />
                <MyEvents />
            </div>
        );
    }
}

export default ContentClass;
