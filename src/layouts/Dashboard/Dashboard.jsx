import React from 'react';
import { Layout, Dashboard, Views, Maspu, Menu, Account,} from '../../components/Styled';
import {CaretDown,} from 'grommet-icons';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <Layout>
                <Dashboard>
                <Maspu>Maspu-App</Maspu>
                <Account>Jonathan <CaretDown className='teste' color='purple'/></Account>
                <Menu>Menu</Menu>
                </Dashboard>
                <Views>

                </Views>
            </Layout>
                   
        )
    }
    
}