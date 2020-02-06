import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  margin: 5% 15%;
  height:460px;
  background-color: #fff;
  box-shadow: 0px 3px 10px -3px #00000040;
  border-radius:5px;
`;

const Part1 = styled.div`
  width:50%;
  height: 100%;
  position: relative;
`;
const Part2 = styled.div`
  width:50%;
  height: 100%;
  background: rgba(76,76,76,1);
  background: -moz-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(76,76,76,1)), color-stop(12%, rgba(89,89,89,1)), color-stop(25%, rgba(102,102,102,1)), color-stop(27%, rgba(94,94,94,1)), color-stop(52%, rgba(0,0,0,1)), color-stop(55%, rgba(17,17,17,1)), color-stop(66%, rgba(71,71,71,1)), color-stop(77%, rgba(43,43,43,1)), color-stop(91%, rgba(28,28,28,1)), color-stop(100%, rgba(19,19,19,1)));
  background: -webkit-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: -o-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  clip-path: polygon(0 15%,0 -1%,100% -1%,100% 100%);
  border-radius:0 5px 5px 0;
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
  background: rgba(76,76,76,1);
  background: -moz-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(76,76,76,1)), color-stop(12%, rgba(89,89,89,1)), color-stop(25%, rgba(102,102,102,1)), color-stop(27%, rgba(94,94,94,1)), color-stop(52%, rgba(0,0,0,1)), color-stop(55%, rgba(17,17,17,1)), color-stop(66%, rgba(71,71,71,1)), color-stop(77%, rgba(43,43,43,1)), color-stop(91%, rgba(28,28,28,1)), color-stop(100%, rgba(19,19,19,1)));
  background: -webkit-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: -o-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  background: linear-gradient(45deg, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(94,94,94,1) 27%, rgba(0,0,0,1) 52%, rgba(17,17,17,1) 55%, rgba(71,71,71,1) 66%, rgba(43,43,43,1) 77%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 );
  clip-path: polygon(63% -1%,100% 46%,200% -1%);
  margin-left: 50%;
`;
const Layout = styled.div`
  display:flex;
  flex-direction: column;
  
`
const Dashboard = styled.div`
  background-color: blue;
  height: 100%;
  width: 18%;
  font-size:20px;
`
const Maspu = styled.div`
  background-color: #fff;
  height: 10%;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 30px;
  color: #e20714;
`
const Views = styled.div`
  height: 91vh;
`
const Menu = styled.div`
 background-color:yellow;
`
const Account = styled.div`
 background-color:grey;
 justify-content: space-between;
`

export {
  Layout, Menu, Dashboard, Views, Maspu, Container, Part1, Part2, Box, BoxLogin, Input, AbsoluteD, Account
}