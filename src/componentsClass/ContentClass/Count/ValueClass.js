import React from "react";

class Value extends React.Component {
    render() {
        const { onValue } = this.props;
        return <span className="Counter__value-class">{onValue}</span>
    }
}

export default Value;