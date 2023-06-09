import React, { useState } from 'react';
import './Count.css';
import Controls from './Controls.js';
import Value from './Value.js';

// class Count extends React.Component {

//     state = {
//         value: this.props.initialValue,
//     }

//     handleIncrement = () => {
//         this.setState(prevState => ({
//             value: prevState.value + 1,
//         }))
//     };

//     handleDecrement = () => {
//          this.setState(prevState => ({
//             value: prevState.value - 1,
//         }))
//     };

//     render() {

//         const { value } = this.state;

//         return (
//             <div className="Counter">
//                 <Value
//                     onValue={value} />
//                 <Controls
//                     onIncrement={this.handleIncrement}
//                     onDecrement={this.handleDecrement}
//                 />
//             </div>
//         );
//     };
// };

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