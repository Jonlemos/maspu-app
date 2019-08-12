import React from 'react';
import { Container, Part1, Part2, Box, BoxLogin, Input, AbsoluteD } from './components/Styled';
import {CheckBox, Button} from 'grommet'
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
            </BoxLogin>
            <BoxLogin>
              <form >
                <Input type="text" name="FirstName" placeholder="Username"/>
                <Input type="password" name="FirstName" placeholder="Password"/>
                <div className="d-flex">
                <CheckBox className="normal-font" label='Lembrar Senha' toggle={true} />
                  <a className="margin-a normal-font" href="/">Esqueceu sua senha ?</a>
                </div>
                <div className="float-button">
                  <Button className="b-radius" label='LOGIN' primary={false}  secondary={false} accent={false} critical={false} plain={false} type='submit'/>
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
    </div>
  );
}

export default App;
