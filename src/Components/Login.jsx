import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Alert } from '@mui/material';

const Login = () => {
  const logoPath="/amazon_logo.png";
  const navigate=useNavigate();
  const [error,setError]=useState({
    status:false,
    msg:'',
    type:''
  });

const handleSubmit=(e)=>{
e.preventDefault()// stop loading while submitting
  const loginData=new FormData(e.currentTarget);
  const actualData={
    email:loginData.get('mail'),
    password:loginData.get('password')
  }
  
if(actualData.email&&actualData.password){
 
  setError({
    status:true,
    msg:"Successfully Login",
    type:"success"
  })
  //document.getElementById('login-form').reset();
  setTimeout(()=>navigate('/home'),1000)
  
}else{
  setError({
    status:true,
    msg:"All Fields are Required",
    type:"error"
  })
}
//console.log(actualData)

}



  return (
    <Container>
     <Logo >
      <img src={logoPath} alt='logo is loading...'></img>
    </Logo>
    <Form onSubmit={handleSubmit} id='login-form'>
        <h3>Sign-In</h3>
        <label for="mail">Email</label>
        <input type="email"placeholder='example@.com' id="mail" name='mail'/>
        <label for="password">Password</label>
        <input type="password"placeholder='********'name='password'id='password'/>
        <a onClick={(e)=>navigate('/sendmail')}>Forgot Password</a>
        <LoginButton >
        Login
        </LoginButton>
        <InfoText>By continuing, you agree to Amazon's <span>Condtions of Use </span>and <span>Privacy Notice </span>.</InfoText>
        {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
      </Form>
     < SignupButton onClick={(e)=>navigate('/signup')}>Create Account in Amazon</SignupButton>
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
a{
  text-align:right;
  margin-right:40px;
  color:blue;
  text-decoration:underline;
  cursor: pointer;
}

`;
const LoginButton=styled.button`
width:50%;
border: solid 1px lightgray;
border-radius:10px ;
font-size: 17px;
background-color:#f3b414;
padding: 7px;
margin-left: 25%;
margin-top: 20px;
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
width:25%;
height:35px;
font-size: 15px;
margin-top: 20px;
&:hover{
  background-color:#dfdfdf;
  border: 1px solid gray;
  cursor: pointer;
}
`
export default Login;
