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
                <Account className='margin-menu'>
                    <ul className=''> 
                        <li className=''>Jonathan <CaretDown  color='purple'/></li>
                            <ul>
                                <li className="margin-submenu">Alterar perfil</li>
                                <li className="margin-submenu">Logout</li>
                            </ul>
                    </ul>
                </Account>
                <Menu className="margin-menu">Menu</Menu>
                </Dashboard>
                <Views>

                </Views>
            </Layout>
                   
        )
    }
    
}