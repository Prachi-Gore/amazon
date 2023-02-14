import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Components/Login';

function App() {
 

  return (
    <Router>
    <Container>
    <img src="" alt='logo is loading...'></img>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<h1>SignUp Page</h1>}></Route>
      
      </Routes>
     </Container>
     </Router>
  )
}
const Container=styled.div`
width:100vw;
color:red;
`;
export default App
