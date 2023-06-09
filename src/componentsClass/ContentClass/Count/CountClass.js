import React from 'react';
import './CountClass.css';
import Controls from './ControlsClass.js';
import Value from './ValueClass.js';

class Count extends React.Component {

    state = {
        value: this.props.initialValue,
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }))
    };

    handleDecrement = () => {
         this.setState(prevState => ({
            value: prevState.value - 1,
        }))
    };

    render() {

        const { value } = this.state;

        return (
            <div className="Counter-class">
                <Value
                    onValue={value} />
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        );
    };
};

export default Count;