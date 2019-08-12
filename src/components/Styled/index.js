import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  margin: 5% 15%;
  height:460px;
  background-color: #fff;
`;

const Part1 = styled.div`
  width:50%;
  height: 100%;
  position: relative;
`;
const Part2 = styled.div`
  width:50%;
  height: 100%;
  background-color:gray;
  clip-path: polygon(0 15%,0 -1%,100% -1%,100% 100%);
`;
const Box = styled.div`
  width:100%;
  height: 100%;
  display:flex;
`;
const BoxLogin = styled.div`
  margin:50px 0 0 35px;
`;
const Input = styled.input`
  width: 80%;
  padding: 5px 10px;
  border-radius:15px;
  margin: 0 0 15px 0;
  display:block;
  height: 35px;
  box-shadow: 0px 3px 10px -3px #00000040;
  border: none;
  outline: none;
`;
const AbsoluteD = styled.div`
  position:absolute;
  height:150px;
  width:50%;
  background-color: gray;
  clip-path: polygon(63% -1%,100% 46%,200% -1%);
  margin-left: 50%;
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
    Input 
}
export { 
    AbsoluteD 
}