import React, { useState } from 'react';
import './Count.css';
import Controls from './Controls.js';
import Value from './Value.js';

const Count = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue);

    const handleIncrement = () => {
        setValue(prevValue => prevValue + 1);
    };

    const handleDecrement = () => {
        setValue(prevValue => prevValue - 1);
    };

    return (
        <div className="Counter">
            <Value onValue={value} />
            <Controls
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        </div>
    );
};

export default Count;