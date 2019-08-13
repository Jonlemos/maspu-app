import React from 'react';
import { Container, Part1, Part2, Box, BoxLogin, Input, AbsoluteD } from '../../components/Styled';
import {CheckBox, Button} from 'grommet';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        <Input type="text" name="FirstName" placeholder="Username"/>
                        <Input type="password" name="FirstName" placeholder="Password"/>
                        <div className="d-flex">
                        <CheckBox className="normal-font" label='Lembrar Senha' critical={true} toggle={true} />
                        <a className="margin-a normal-font" href="/">Esqueceu sua senha ?</a>
                        </div>
                        <div className="float-button">
                        <Button className="b-radius" label='LOGIN' critical={true} type='submit'/>
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