import React from 'react';
import { Table, Container, Row, Image } from 'react-bootstrap';
import Total from './../../services/Total/Total';
import './Extracts.css';
import initials from './../../assets/images/initials.png';

export default class Extract extends React.Component {
    constructor() {
        super();
        this.spending = [
            {
                item: 'Coca-Cola',
                value: 2.9,
                date: '06/02/2020 ás 15:23',
            },
            {
                item: 'Fandangos de Presento',
                value: 2.5,
                date: '06/02/2020 ás 15:23',
            },
            {
                item: 'Picolé Frutos de Açaí',
                value: 3.48,
                date: '03/02/2020 ás 12:01',
            },
            {
                item: 'Picolé Magno',
                value: 5.03,
                date: '20/02/2020 ás 13:43',
            },
            {
                item: 'Coca-Cola',
                value: 2.9,
                date: '23/02/2020 ás 18:10',
            },
            {
                item: 'Cerveja Heineken',
                value: 4.5,
                date: '30/02/2020 ás 20:55',
            },
        ];

        this.total = 0;
    }

    // incrementTotal(value) {
    //     this.total += value;
    // }

    render() {
        return (
            <Container className="bd-masthead">
                <Row
                    style={{
                        margin: '0px 2px 0px 2px',
                        backgroundColor: 'purple',
                    }}
                >
                    <Image
                        style={{ width: '60px', height: '60px' }}
                        src={initials}
                    />
                </Row>
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Data da Compra</th>
                            <th>Valor (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.spending.map((spent, i) => {
                            // this.incrementTotal(spent.value);
                            return (
                                <tr key={i}>
                                    <td>{(i + 1).toString()}</td>
                                    <td>{spent.item}</td>
                                    <td>{spent.date}</td>
                                    <td>
                                        R$ {spent.value.toFixed(2).toString()}
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <b class="float-right">Total:</b>
                            </td>
                            <td>
                                R$ <Total values={this.spending}></Total>
                                {/* { this.total } */}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        );
    }
}
