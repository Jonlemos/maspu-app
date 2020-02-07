import React from 'react';
import { Container, Card, Button, Accordion } from 'react-bootstrap';
import './Categories.css';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.categories = [
            {
                productName: 'Coca-Cola',
                description: '500ml',
                price: 5,
                category: 1,
                nameCategory: 'Bebidas',
                imagem:
                    'https://static.carrefour.com.br/medias/sys_master/images/images/hd7/hd6/h00/h00/12175683682334.jpg',
            },
            {
                productName: 'Heineken',
                description: '450ml',
                price: 5,
                category: 1,
                nameCategory: 'Bebidas',
                imagem:
                    'https://static.carrefour.com.br/medias/sys_master/images/images/hd7/hd6/h00/h00/12175683682334.jpg',
            },
            {
                productName: 'Chá',
                description: '330ml',
                price: 5,
                category: 1,
                nameCategory: 'Bebidas',
                imagem:
                    'https://static.carrefour.com.br/medias/sys_master/images/images/hd7/hd6/h00/h00/12175683682334.jpg',
            },

            {
                productName: 'Bombom',
                description: '1un',
                price: 5,
                category: 2,
                nameCategory: 'Doces',
                imagem:
                    'https://basmar.com.br/image/cache/data/PRODUTOS%20NOVOS/Sonho-de-Valsa-13-800x800.jpg',
            },
            {
                productName: 'Fandangos',
                description: '450ml',
                price: 5,
                category: 2,
                nameCategory: 'Doces',
                imagem:
                    'https://basmar.com.br/image/cache/data/PRODUTOS%20NOVOS/Sonho-de-Valsa-13-800x800.jpg',
            },
            {
                productName: 'Paçoca',
                description: '330ml',
                price: 5,
                category: 2,
                nameCategory: 'Doces',
                imagem:
                    'https://basmar.com.br/image/cache/data/PRODUTOS%20NOVOS/Sonho-de-Valsa-13-800x800.jpg',
            },
        ];
    }

    products = () => {
        axios.get('/produts').then(response => {
            console.log(response);
        });
    };

    render() {
        return (
            <Container className="container-product">
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h1>Bebidas</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <section className="section-card">
                            {this.categories.map((categories, i) => (
                                <Card
                                    key={i}
                                    className="Card-See"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={categories.imagem}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {this.props.productName}
                                        </Card.Title>
                                        <Card.Text>
                                            {categories.price}
                                        </Card.Text>
                                        <Button variant="primary">
                                            Adicionar
                                        </Button>
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
