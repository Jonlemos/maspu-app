import React from 'react';
import { Table, Container } from 'react-bootstrap';
import Total from "./../../components/Total/Total"
import './Extracts.css';

export default class Extract extends React.Component {
    constructor() {
        super();
        this.spending = [
            {
                item: 'Coca-Cola',
                value: 2.90,
                date: '06/02/2020 ás 15:23'
            },
            {
                item: 'Fandangos de Presento',
                value: 2.50,
                date: '06/02/2020 ás 15:23'
            },
            {
                item: 'Picolé Frutos de Açaí',
                value: 3.48,
                date: '03/02/2020 ás 12:01'
            },
            {
                item: 'Picolé Magno',
                value: 5.03,
                date: '20/02/2020 ás 13:43'
            },
            {
                item: 'Coca-Cola',
                value: 2.90,
                date: '23/02/2020 ás 18:10'
            },
            {
                item: 'Cerveja Heineken',
                value: 4.50,
                date: '30/02/2020 ás 20:55'
            }]
    }

    render() {
        return (
            <Container className="bd-masthead">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Valor</th>
                            <th>Data da Compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.spending.map((spent, i) => (
                            <tr key={i}>
                                <td>{(i + 1).toString()}</td>
                                <td>{spent.item}</td>
                                <td>{spent.value.toFixed(2).toString()}</td>
                                <td>{spent.date}</td>
                            </tr>
                        ))}

                        <tr>
                            <td></td>
                            <td></td>
                            <td><b>Total</b></td>
                            <td><Total values={this.spending}></Total></td>
                        </tr>

                    </tbody>
                </Table>
            </Container>
        );
    }
}
