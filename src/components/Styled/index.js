import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  margin: 5% 15%;
  height:460px;
  background-color: #00f;
`;

const Part1 = styled.div`
  width:50%;
  height: 100%;
`;
const Part2 = styled.div`
  width:50%;
  height: 100%;
`;
const Box = styled.div`
  width:100%;
  height: 100%;
  display:flex;
`;
const Button = styled.button`
  width:100px;
  height: 30px;
  background-color:#00ff21;
  border-radius: 35px;
  margin: auto;
  text-align: center;
  border: none;
`;
const BoxLogin = styled.div`
  margin:50px 0 0 35px;
`;
const Input = styled.input`
  width: 80%;
  padding: 5px 10px;
  border-radius:15px;
  margin: 0 0 15px 0
  display:block;
  height:25px;
`;

export { 
    Container 
}
export { 
    Part1 
}
export { 
    Part2 
}
export { 
    Box 
}
export { 
    BoxLogin 
}
export { 
    Button 
}
export { 
    Input 
}