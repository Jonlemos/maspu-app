import React, { Component } from 'react';
import { Container, Card, Button, Accordion } from 'react-bootstrap';
import Buttons from './Buttons';
import FloatingBar from './FloatingBar';
import './Categories.css';
import axios from 'axios';
// import api from '../../services/api';

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedProducts: {},
            FloatingBar: {
                status: false,
            },
            totalValue: 0,
        };
    }
    handleCaretClick = () => {
        this.setState({
            FloatingBar: {
                status: !this.state.FloatingBar.status,
            },
        });
    };

    componentDidMount() {
        axios.get('https://maspu-app.herokuapp.com/products').then(response => {
            if (response) {
                const products = response.data;
                console.log(products);
                this.setState({ products });
            }
        });
        // this.loadProducts();
    }
    // loadProducts = async () => {
    //     const response = await api.get('/products');
    //     console.log(response);
    //     if (response) {
    //         const products = response.data;
    //         console.log(products);
    //         this.setState({ products });
    //     }
    // };

    selectProduct = ({ quantity, product }) => {
        this.setState(prevState => {
            const newState = {
                selectedProducts: {
                    ...prevState.selectedProducts,
                    [product._id]: {
                        product,
                        quantity,
                        totalValue: product.price * quantity,
                    },
                },
            };
            this.calculateTotalValue(newState.selectedProducts);
            return newState;
        });
    };

    calculateTotalValue(selectedProducts) {
        let totalValue = 0;
        Object.keys(selectedProducts).forEach(key => {
            totalValue += selectedProducts[key].totalValue;
        });
        this.setState({ ...this.state, totalValue: totalValue });
        console.log(totalValue);
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <FloatingBar
                    status={this.state.FloatingBar.status ? 'open' : ''}
                />
                <Container className="container-product">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle
                            as={Button}
                            className="align-toggle"
                            variant="link"
                            eventKey="0"
                        >
                            <h1>Bebidas</h1>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <section className="section-card">
                                {this.state.products.map((product, i) =>
                                    product.category == 1 ? (
                                        <div key={i}>
                                            <Card
                                                className="Card-See"
                                                style={{ width: '18rem' }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={product.image}
                                                />
                                                <Card.Body>
                                                    <Card.Title>
                                                        {product.title}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        R$ {product.price}
                                                    </Card.Text>
                                                    <Buttons
                                                        selectProduct={quantity =>
                                                            this.selectProduct({
                                                                quantity,
                                                                product,
                                                            })
                                                        }
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ) : (
                                        ''
                                    )
                                )}
                            </section>
                        </Accordion.Collapse>
                    </Accordion>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Toggle
                            as={Button}
                            className=""
                            variant="link"
                            eventKey="1"
                        >
                            <h1>Bombonierie</h1>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <section className="section-card">
                                {this.state.products.map((product, i) =>
                                    product.category == 2 ? (
                                        <div key={i}>
                                            <Card
                                                className="Card-See"
                                                style={{ width: '18rem' }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={product.image}
                                                />
                                                <Card.Body>
                                                    <Card.Title>
                                                        {product.title}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        R$ {product.price}
                                                    </Card.Text>
                                                    <Buttons
                                                        selectProduct={quantity =>
                                                            this.selectProduct({
                                                                quantity,
                                                                product,
                                                            })
                                                        }
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ) : (
                                        ''
                                    )
                                )}
                            </section>
                        </Accordion.Collapse>
                    </Accordion>
                </Container>
            </div>
        );
    }
}
