import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
export default function AddProduct(){
    const logoPath="/amazon_logo.png";
    const [title,setTitle]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const [price,setPrice]=useState("");
    const [rating,setRating]=useState("");
    const addProduct=(e)=>{
        e.preventDefault();
        axios.post('/products/add',{title,imageUrl,price,rating}).then(()=>{
          setTitle("");
          setImageUrl("");
          setPrice(0);
          setRating(0)
        }).catch((error)=>alert(error.message));
    }
    return(
        
        <Container>
        <Logo >
         <img src={logoPath} alt='logo is loading...'></img>
       </Logo>
       <Form>
           <h3>Add Product</h3>
           <label for="title">Title</label>
           <input type="text" id="title"onChange={(e)=>setTitle(e.target.value)} value={title}/>
           <label for="imgurl">ImageUrl</label>
           <input type="imgurl" id="imgurl"onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl}/>
           <label for="price">Price</label>
           <input type="price"onChange={(e)=>setPrice(e.target.value)} value={price}/>
           <label for="rating">rating</label>
           <input type="rating"onChange={(e)=>setRating(e.target.value)} value={rating}/>
           <LoginButton onClick={(e)=>addProduct}>Add Product</LoginButton>
       
            
           
         </Form>
         
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
width:90%;
border: none;
border-radius:10px ;
font-size: 17px;
background-color:#f3b414;
padding: 7px;
margin-top: 25px;

`;




