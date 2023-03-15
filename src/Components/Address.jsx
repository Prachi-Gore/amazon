
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import Navbar from './Navbar';
import { Alert } from '@mui/material';

export default function Address(){
    const navigate=useNavigate();
    const [{},dispatch]=useStateValue();
    const deliver=(e)=>{
        e.preventDefault();
        
    dispatch({
        type:'SET_ADDRESS',
        item:{name,phone,email,flat,area,landmark,city,state}
    })
    navigate('/payment')
}
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [flat,setFlat]=useState("");
    const [area,setArea]=useState("");
    const [landmark,setLandmark]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    

//console.log(name);
    return(
   
        <Container>
        <Navbar/>
        <InnerContainer>
        <Form id='address-form'>
        <label for="name">Full Name</label>
        <input  type="text"id="name" placeholder="Prachi G Gore"onChange={(e)=>{setName(e.target.value)}}value={name}/>
        <label for="phone">Phone Number</label>
        <input type="tel"id="phone"  placeholder='0123456789'onChange={(e)=>{setPhone(e.target.value) }}value={phone}/>
        <label for="email">Email</label>
        <input type="email"id="email"placeholder='prachigore408@gmail.com'onChange={(e)=>{setEmail(e.target.value) }}value={email}/>
        <label for="flat">Flat, House no., Building, Company, Apartment</label>
        <input id="flat"placeholder='Room No.5, ABC apartment'onChange={(e)=>{setFlat(e.target.value) }}value={flat}/>
        <label for="area">Area, Colony, Street, Sector, Village</label>
        <input id="area"placeholder='MJ nagar'onChange={(e)=>{setArea(e.target.value) }}value={area}/>
        <label for="landmark">Landmark</label>
        <input id="landmark"placeholder='Opposite National School'onChange={(e)=>{setLandmark(e.target.value)} }value={landmark}/>
        <label for="town">Town/City</label>
        <input id="town" placeholder='Mumbai'onChange={(e)=>{setCity(e.target.value)} }value={city}/>
        <label for="state">State</label>
        <input id="state" placeholder='Maharashtra'onChange={(e)=>setState(e.target.value) }value={state}/>
        
        <button onClick={deliver}>Deliver to this Address</button>
        </Form>
        </InnerContainer>
        </Container>
    )
};
const Container=styled.div`
background-color:rgb(234,237,237);
`;
const InnerContainer=styled.div`
    padding-top:20px ;
    padding-bottom:20px;
`;
const Form=styled.form`
    display:flex;
    flex-direction: column;
    width: 40%;
    height: fit-content;
    margin: auto;
    padding: 15px;
    background-color:white;
label{
    font-weight:600;
    margin-bottom:7px;
}
input{
    outline: none;
    border-radius: 3px;
    border:none;
    border: 2px solid lightgray;
    margin-bottom:15px;
    padding:6px;
    font-weight:normal;
}
button{
    cursor: pointer;
    width:40%;
    min-width: fit-content;
    height: 35px;
    background-color: #ffa32a;
    border:none;
    border-radius:3px;
    margin-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 15px;
}

`;