import React from 'react';
import { Layout, Dashboard, Views, Maspu, Menu, Account,} from '../../components/Styled';
import {CaretDown,} from 'grommet-icons';
import Dropdown from '../../components/Dropdown/Dropdown';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: {
                status: false
            }
        }
    }

    handleCaretClick = () => {
        this.setState({
            dropdown: {
                status: !this.state.dropdown.status
            }
        });
    }

    render() {
        return(
            <Layout>
                <Dashboard>
                <Maspu>Maspu-App</Maspu>
                <Account className=''>
                    <ul className=''> 
                        <li className='margin-menu'>Jonathan <CaretDown onClick={this.handleCaretClick} className="height-svg"  color='purple'/></li>
                            <ul>
                                <Dropdown status={this.state.dropdown.status ? 'open' : ''}>
                                    <li className="margin-submenu">Alterar perfil</li>
                                    <li className="margin-submenu">Logout</li>
                                </Dropdown>
                                
                            </ul>
                    </ul>
                </Account>
                <Menu className="margin-menu">Painel</Menu>
                    <Account className='margin-menu'>Produtos</Account>
                    <Account className='margin-menu'>Usuários</Account>
                    <Account className='margin-menu'>Ordens</Account>
                </Dashboard>
                <Views>

                </Views>
            </Layout>
                   
        )
    }
    
}