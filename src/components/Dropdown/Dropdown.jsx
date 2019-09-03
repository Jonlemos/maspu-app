import React from 'react';
import './Dropdown.css';

const Dropdown = props => (
    <div className={`dropdown ${props.status}`}>
        {props.children}
    </div>
);

export default Dropdown;