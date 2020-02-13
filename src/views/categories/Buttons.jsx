import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import './Categories.css';
// import { ThemeConsumer } from 'styled-components';

export default class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increment = () => {
        this.setState(() => {
            const newState = { counter: this.state.counter + 1 };
            this.props.selectProduct(newState.counter);
            return newState;
        });
    };

    decrement = () => {
        this.state.counter &&
            this.setState(() => {
                const newState = {
                    counter: this.state.counter - 1,
                };
                this.props.selectProduct(newState.counter);
                return newState;
            });
    };

    render() {
        return (
            <Row className="button-aling">
                <Button onClick={this.decrement} variant="primary">
                    -
                </Button>
                <div> {this.state.counter} </div>
                <Button onClick={this.increment} variant="primary">
                    +
                </Button>
            </Row>
        );
    }
}
