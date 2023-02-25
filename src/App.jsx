import React from 'react';
export const StateContext=React.createContext();
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Address from "./Components/Address";



function App() {
 
  return (
    <Router>
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/address' element={<Address/>}></Route>

      </Routes>
     </Container>
     </Router>  
  )
}
const Container=styled.div`
width:100vw;
height:100vh;

`;


export default App;
