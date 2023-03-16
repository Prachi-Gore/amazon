import styled from 'styled-components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const logoPath="/amazon_logo.png";

const SendMail = () => {
  const [error,setError]=useState({
    status:false,
    msg:"",
    type:""
  })
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
   
  const mailData=new FormData(e.currentTarget);
  const actualData={
    email:mailData.get('mail'),
  }
 
  if(!actualData.email){
setError({
  status:true,
    msg:"Please Enter email id",
    type:"error"
})
  }else{
    navigate('/resetpassword')
  }
}
  return (
    <Container>
      <Logo >
      <img src={logoPath} alt='logo is loading...'></img>
    </Logo>
    <Form onSubmit={handleSubmit}>
      <label for="mail" >Enter email</label>
      <input id='mail'type="email" name='mail'/>
      <button>send</button>
    </Form>  
    <Alert severity={error.type}>{error.msg}</Alert>
    </Container>
  )
}

export default SendMail

const Container=styled.div`
  
  height: fit-content;
  font-size: 24px;
  width:fit-content;
  display: flex;
  flex-direction:column;
  margin:auto;
  margin-top:60px;

`
const Logo=styled.div`
width:170px;
margin:auto;

img{
  width:100%; 
  
}
`;
const Form=styled.form`
display: flex;
flex-direction:column;
align-items: flex-end;
margin-top:50px;
  label{
   
    margin: auto;
    margin-left:0px;
  }
  input{
    outline:none;
    width:400px;
    margin-bottom:10px;
    margin-top:10px;
    padding:5px 10px 5px 10px;
    
  }
  button{
    margin-top:20px;
    margin-bottom:20px;
    background-color:blue;
    border-radius:4px;
    padding:3px;
    border:none;
    color:white;
    
    font-size:24px;
    width:70px;
    
    
  }
`;
