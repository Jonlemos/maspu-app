import React, {Component} from 'react';
import {Route, Switch} from 'react-router'
import { Layout, Dashboard, Views, Maspu, Menu, Account,} from '../../components/Styled';
import {CaretDown,} from 'grommet-icons';
import Dropdown from '../../components/Dropdown/Dropdown';
import Categories from '../../views/categories/Categories'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: {
                status: false
            }
        }
        this.views = [{
          name: 'Categories',
          path: '/dashboard/categories',
          component: Categories  
        }]
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
                    <Account onClick={()=>window.location.pathname="/dashboard/categories"} className='margin-menu'>Produtos</Account>
                    <Account className='margin-menu'>Usuários</Account>
                    <Account className='margin-menu'>Ordens</Account>
                </Dashboard>
                <Views>
                    {this.views.map((view, i) => <Route key={i} { ...view }/>)}
                </Views>
            </Layout>
                   
        )
    }
    
}