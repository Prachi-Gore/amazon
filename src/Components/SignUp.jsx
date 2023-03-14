import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@mui/material";

const SignUp=()=>{
    const logoPath="/amazon_logo.png";
    const navigate=useNavigate();
    const [error ,setError]=useState({
      status:false,
      msg:"",
      type:""
    });

    const handleSubmit=(e)=>{
      e.preventDefault();
      const signupData=new FormData(e.currentTarget);
      //console.log(signupData)
      const actualData={
        //signupData.get(name)
        name:signupData.get('name'),
        email:signupData.get('mail'),
        password:signupData.get('password')
      }
      
      if(actualData.name&&actualData.email&&actualData.password){
        //console.log(actualData)
        setError({
          status:true,
          msg:"Account created successfully",
          type:"success"
         })
        document.getElementById('signup-form').reset()
      }else{
           
           setError({
            status:true,
            msg:"All Fields are Required",
            type:'error'
           })
      }
    }
    return(
    <Container>
     <Logo >
      <img src={logoPath} alt='logo is loading...'></img>
    </Logo>
    <Form onSubmit={handleSubmit} id='signup-form'>
        <h3>Sign-Up</h3>
        <label for="name">Name</label>
        <input type="text"placeholder='Prachi Gore' name='name'id="name"/>
        <label for="mail">Email</label>
        <input type="email"placeholder='example@.com' name='mail'id="mail"/>
        <label for="password">Password</label>
        <input type="password"placeholder='********' name='password'id="password"/>
         < SignupButton>Create Account in Amazon</SignupButton>
         
        <InfoText>By continuing, you agree to Amazon's <span>Condtions of Use </span>and <span>Privacy Notice </span>.</InfoText>
      </Form>
      <LoginButton onClick={(e)=>{
        e.preventDefault();
        navigate('/login')
        }
        }>Back to Login</LoginButton>
    {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
      </Container>
    )
}
const Container=styled.div`
width:100vw;
display:flex;
flex-direction:column ;
align-items: center;
`;

const Logo=styled.div`
width:170px;
padding:20px;
img{
  width:100%; 
}
`;
const Form=styled.form`
display:flex ;
flex-direction: column;
width:30%;
height:fit-content ;
padding:20px ;
border:solid 1.5px lightgrey ;
h3{
  font-size: 30px;
  font-weight: 400 ;
  align-self: flex-start;
  margin-bottom: 20px;
}
label{
font-size: 20px;
font-weight:600 ;
margin-bottom:6px ;
}
input{
font-size:16px ;
padding:5px ;
margin-bottom:20px;
width:90% ;
border: solid 1px lightgray;
border-radius:5px ;
&:hover{
  border-color:black; 
}
}
`;
const LoginButton=styled.button`
width:25%;
border: solid 1px lightgray;
border-radius:10px ;
font-size: 17px;
background-color:#f3b414;
padding: 7px;
margin-top: 25px;
margin-bottom: 25px;
justify-content: center;
`;
const InfoText=styled.p`
margin-top: 25px;
font-size: 16px;
width: 100%;
word-wrap: normal;
span{
  color:#426bc0;
}
`;
const SignupButton=styled.button`
width:90%;
height:35px;
font-size: 15px;
margin-top: 20px;
&:hover{
  background-color:#dfdfdf;
  border: 1px solid gray;
}
`;


export default SignUp;
