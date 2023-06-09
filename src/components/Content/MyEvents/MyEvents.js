import React from 'react';
import './MyEvents.css';

const MyEvents = () => {
    const handleEvent = (event) => {
        console.log(`Event type: ${event.type}`);
    };

    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <div
            className='event'
            onClick={handleEvent}
            onMouseDown={handleEvent}
            onMouseUp={handleEvent}
            onMouseMove={handleEvent}
            onCut={handleEvent}
            onCopy={handleEvent}
            onWheel={handleEvent}
            onContextMenu={handleContextMenu}
        >
            Move your mouse, cut, copy, click or scroll here
        </div>
    );
};

export default MyEvents;

