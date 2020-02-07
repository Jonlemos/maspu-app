import React from "react";

const Total = props => {
    const total = props.values.reduce(
        (prevValue, currentValue) => prevValue + currentValue.value,
        0
    );
    return <p>{'R$ ' + total.toFixed(2).toString()}</p>;
};

export default Total;