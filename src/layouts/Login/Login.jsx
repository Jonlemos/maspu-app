import React from 'react';
import { Container, Part1, Part2, Box, BoxLogin, Input, AbsoluteD } from '../../components/Styled';
import {CheckBox, Button} from 'grommet';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = () => {
        axios.post('https://maspu-app.herokuapp.com/auth', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            const token = res.data.token || null;
            if (token) {
                localStorage.token = token;
                window.location.replace('/dashboard');
            } else {

            }
        }).catch(error => console.error(error));
    }

    render() {
        return(
            <Container>
                <Box>
                <Part1>
                    <AbsoluteD/>
                    <BoxLogin>
                    <h1 style={{color: '#303030'}}>Login Admin</h1> 
                    </BoxLogin>
                    <BoxLogin>
                    <form >
                        <Input onChange={this.handleEmailChange} type="e-mail" name="FirstName" placeholder="E-mail"/>
                        <Input onChange={this.handlePasswordChange} type="password" name="FirstName" placeholder="Password"/>
                        <div className="d-flex">
                        <CheckBox className="normal-font" label='Lembrar Senha' critical={true} toggle={true} />
                        <a className="margin-a normal-font" href="/">Esqueceu sua senha ?</a>
                        </div>
                        <div className="float-button">
                        <Button onClick={this.handleSubmit} className="b-radius" label='LOGIN' critical={true}/>
                        </div>
                    </form>
                    
                    </BoxLogin>
                </Part1>
                <Part2>
                    <BoxLogin>
                    <h2 className="welcome">Bem Vindo de volta!</h2>
                    </BoxLogin>
                </Part2>
                </Box>
            </Container>           
        )
    }
    
}