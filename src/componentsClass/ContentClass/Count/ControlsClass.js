import React from "react";

class Controls extends React.Component {
    render() {
        const { onIncrement, onDecrement } = this.props;
        return (
            <div className="Counter__controls-class">
                <button type="button" onClick={onDecrement}>
                    Уменьшить на 1
                </button>
                <button type="button" onClick={onIncrement}>
                    Увеличить на 1
                </button>
            </div>
        );
    }
};

export default Controls;
