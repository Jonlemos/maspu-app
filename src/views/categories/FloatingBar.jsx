import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';

export default class FloatingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalValue: 0,
        };
    }

    render() {
        return (
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    minHeight: '300px',
                    zIndex: 2,
                    bottom: '-25%',
                    right: '39%',
                }}
            >
                <Toast
                    style={{
                        // position: 'absolute',
                        bottom: 10,
                        right: 0,
                        minWidth: 300,
                        textAlign: 'center',
                        fontSize: 18,
                    }}
                >
                    <Toast>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto" style={{ fontSize: 20 }}>
                            Total da Compra:
                        </strong>
                    </Toast>
                    <Toast.Body>R$ 5,15</Toast.Body>
                </Toast>
            </div>
        );
    }
}
