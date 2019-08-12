import React from 'react';
import { Container, Part1, Part2, Box, BoxLogin, Button, Input, AbsoluteD } from './components/Styled';
import {CheckBox} from 'grommet'
import { Login } from './layouts';


function App() {
  return (
    <div className="App">
      <Container>
        <Box>
          <Part1>
          <AbsoluteD></AbsoluteD>
            <BoxLogin>
              <Login margin="0" color="#04f5f0"></Login>
              <p margin="50">Não tem usuário ? Peça um novo</p>
            </BoxLogin>
            <BoxLogin>
              <form >
                <Input type="text" name="FirstName" placeholder="Username"/>
                <Input type="text" name="FirstName" placeholder="Password"/>
                <div className="d-flex">
                  <CheckBox/>
                  <a className="margin-a" href="#">Esqueceu sua senha ?</a>
                </div>
                <Button type="submit">Login</Button>
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
    </div>
  );
}

export default App;
