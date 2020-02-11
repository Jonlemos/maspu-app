import React, { Component } from 'react';
import { Container, Card, Button, Accordion, Row } from 'react-bootstrap';
import './Categories.css';
import axios from 'axios';

export default class Categories extends Component {

    state = {
        products: [],
        counter: 0
    };

    increment(a) {
        this.setState({ counter: a === a ? this.state.counter + 1 : this.state.counter })
    }

    decrement(a) {
        this.setState({ counter: a === a ? this.state.counter - 1 : this.state.counter })
    }

    componentDidMount() {
        axios.get('https://maspu-app.herokuapp.com/products').then(response => {
            if (response) {
                const products = response.data;
                console.log(products);
                this.setState({ products });
            }
        });
    }

    render() {
        return (
            <Container className="container-product">
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h1>Bebidas</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <section className="section-card">
                            {this.state.products.map((categories, i) => (
                                <Card
                                    key={i}
                                    className="Card-See"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={categories.image}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {categories.title}
                                        </Card.Title>
                                        <Card.Text>
                                            R$ {categories.price}
                                        </Card.Text>
                                        <Row className="button-aling">
                                            <Button key={i} onClick={() => this.decrement(i)} variant="primary">
                                                -
                                            </Button>
                                            <div> {this.state.counter} </div>
                                            <Button key={i} onClick={() => this.increment(i)} variant="primary">
                                                +
                                            </Button>

                                        </Row>

                                    </Card.Body>
                                </Card>
                            ))}
                        </section>
                    </Accordion.Collapse>
                </Accordion>
                <Accordion defaultActiveKey="1">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <h1>Bombonie</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <section className="section-card">
                            <Card
                                className="Card-See"
                                style={{ width: '18rem' }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://static.carrefour.com.br/medias/sys_master/images/images/hd7/hd6/h00/h00/12175683682334.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card
                                className="Card-See"
                                style={{ width: '18rem' }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://static.carrefour.com.br/medias/sys_master/images/images/hd7/hd6/h00/h00/12175683682334.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card
                                className="Card-See"
                                style={{ width: '18rem' }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://static.carrefour.com.br/medias/sys_master/images/images/hd7/hd6/h00/h00/12175683682334.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </section>
                    </Accordion.Collapse>
                </Accordion>
            </Container>
        );
    }
}
