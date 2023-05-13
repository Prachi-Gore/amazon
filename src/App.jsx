import React from 'react';
export const StateContext=React.createContext();
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Address from "./Components/Address";
import Payment from './Components/Payment';
import SendMail from './Components/SendMail';
import ResetPassword from './Components/ResetPassword';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const promise=loadStripe(
 "pk_test_51Mfi6ISH2wvEtxvY8eITXdU0suBlbFMdmvvCmlVs3GZMeZrE1TKWca2koai11Ep7nu3zPyHFPvrySDBkpK8MwgbC00HazzYJUe"
)
function App() {
 
  return (
    <Router>
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/address' element={<Address/>}></Route>
        <Route path='/sendmail' element={<Login/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
        <Route path='/payment' element={<Elements stripe={promise}><Payment/></Elements>}></Route>
       
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
