import React from 'react';
import { Table } from 'react-bootstrap';

export default class Extract extends React.Component {
    constructor() {
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
                value: 3.40,
                date: '03/02/2020 ás 12:01'
            },
            {
                item: 'Picolé Magno',
                value: 5.00,
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
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
