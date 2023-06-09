import React from 'react';
import './MyEventsClass.css';

class MyEvents extends React.Component {
    handleEvent = (event) => {
        console.log(`Event type: ${event.type}`);
    };

    handleContextMenu = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div
                className='event'
                onClick={this.handleEvent}
                onMouseDown={this.handleEvent}
                onMouseUp={this.handleEvent}
                onMouseMove={this.handleEvent}
                onCut={this.handleEvent}
                onCopy={this.handleEvent}
                onWheel={this.handleEvent}
                onContextMenu={this.handleContextMenu}
            >
                Move your mouse, cut, copy, click or scroll here
            </div>
        );
    }
}

export default MyEvents;
