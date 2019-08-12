import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1 style={{color: this.props.color, margin: this.props.margin}}>Login Admin</h1>            
        )
    }
    
}