export default props => {
    const total = props.values.reduce(
        (prevValue, currentValue) => prevValue + currentValue[props.position],
        0
    );

    return total.toFixed(2).toString();
};