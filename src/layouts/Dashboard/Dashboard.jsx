import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout, Views } from '../../components/Styled';
import { Categories, Extracts, Extract } from '../../views';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: {
                status: false,
            },
        };
        this.views = [
            {
                name: 'Categories',
                path: '/dashboard/categories',
                component: Categories,
                exact: false,
            },
            {
                name: 'Extracts',
                path: '/dashboard/extracts',
                component: Extracts,
                exact: true,
            },
            {
                name: 'Extract',
                path: '/dashboard/extracts/:id',
                component: Extract,
                exact: false,
            },
        ];
    }

    handleCaretClick = () => {
        this.setState({
            dropdown: {
                status: !this.state.dropdown.status,
            },
        });
    };

    render() {
        return (
            <Layout>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Maspu-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link
                                onClick={() =>
                                    (window.location.pathname = '/dashboard')
                                }
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link href="#link">Painel</Nav.Link>
                            <Nav.Link
                                onClick={() =>
                                    (window.location.pathname =
                                        '/dashboard/categories')
                                }
                            >
                                {' '}
                                Produtos
                            </Nav.Link>
                            <Nav.Link href="#link">Usuarios</Nav.Link>
                            <Nav.Link
                                onClick={() =>
                                    (window.location.pathname =
                                        '/dashboard/extracts')
                                }
                            >
                                Extrato
                            </Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Views>
                    {this.views.map((view, i) => (
                        <Route key={i} {...view} />
                    ))}
                </Views>
                {/* <Account className=''>
                        <ul className=''>
                            <li className='margin-menu'>Jonathan <CaretDown onClick={this.handleCaretClick} className="height-svg" color='purple' /></li>
                            <ul>
                                <Dropdown status={this.state.dropdown.status ? 'open' : ''}>
                                    <li className="margin-submenu">Alterar perfil</li>
                                    <li className="margin-submenu">Logout</li>
                                </Dropdown>

                            </ul>
                        </ul>
                    </Account> */}
                {/* <Menu className="margin-menu">Painel</Menu> */}
                {/* <Account onClick={() => window.location.pathname = "/dashboard/categories"} className='margin-menu'>Produtos</Account> */}
                {/* <Account className='margin-menu'>Usuários</Account>
                    <Account className='margin-menu'>Ordens</Account> */}
            </Layout>
        );
    }
}
