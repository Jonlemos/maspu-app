import React from 'react';
import { Container, Part1, Part2, Box, BoxLogin, Button, Input } from './components/Styled';
import { Login } from './layouts';


function App() {
  return (
    <div className="App">
      <Container>
        <Box>
          <Part1>
            <BoxLogin>
              <Login margin="0" color="#04f5f0"></Login>
              <p margin="50">Não tem usuário ? Peça um novo</p>
            </BoxLogin>
            <BoxLogin>
              <form >
                <Input type="text" name="FirstName" value="UserName"/>
                <Input type="text" name="FirstName" value="Password"/>
                <Button>Login</Button>
              </form>
            </BoxLogin>
          </Part1>
          <Part2>
            <Login margin="0 0" color="#04f5f0"></Login>
          </Part2>
        </Box>
      </Container>
    </div>
  );
}

export default App;
