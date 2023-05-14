import styled from 'styled-components'
import React from 'react'
import { Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const logoPath="/amazon_logo.png";
const ResetPassword = () => {
const [error,setError]=useState({
  status:false,
  msg:"",
  type:""
})
const navigate=useNavigate()
  const handleSubmit=(e)=>{
   e.preventDefault()
   const data=new FormData(e.currentTarget)
   const actualData={
    ep:data.get('ep'),
    cp:data.get('cp')
   }
   //console.log(actualData)
   if(actualData.ep.length==0||actualData.cp.length==0||actualData.ep!==actualData.cp){
    setError({
      status:true,
      msg:"Please Enter Password Carefully",
      type:"error"
    })
      
   }else  {
    setError({
      status:true,
      msg:"Password Updated Successfully",
      type:"success"
    })
    
   }
  }
  return (
    <Container>
      <Logo >
      <img src={logoPath} alt='logo is loading...'></img>
    </Logo>
      <Form onSubmit={handleSubmit}>
        <label for="EP">Enter Password</label>
        <input id="EP" name='ep' type="password"/>
        <label for="CP" >Confirm Password</label>
        <input id="CP"name="cp" type="password"/>
        <button>Submit</button>
      </Form>
      {error.status?
      <div>
        <Alert severity={error.type}>
        {error.msg}
        </Alert>
        {error.type==="success"?<button onClick={()=>navigate('/login')}>Back to Login</button>:""}
      </div>
        :''}
    </Container>
  )
}

export default ResetPassword
 
const Container=styled.div`
  
  height: fit-content;
  font-size: 24px;
  width:fit-content;
  display: flex;
  flex-direction:column;
  
  margin:auto;
  margin-top:60px;
  div{
    button{
      
width:50%;
border: solid 1px lightgray;
border-radius:10px ;
font-size: 17px;
background-color:#f3b414;
padding: 7px;
margin-left: 25%;
margin-top: 40px;


    }
  }

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
align-items: flex-start;
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
    padding:5px;
    border:none;
    color:white;
  
    font-size:17px;
    width:100px;
    
    
  }
`;
