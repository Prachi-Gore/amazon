import React from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';
import { useStateValue } from "../StateProvider";

export default function Card({id,image,descr,rating,price}){
     const [{basket},dispatch]=useStateValue();

    
     const addToBasket=(e)=>{
       
        e.preventDefault();
        dispatch( 
            {
                type:'ADD_TO_BASKET',
                item:{
                    image,descr,rating,price
                }
            }  
        );
        
       }
       
    
    return(
        <Container>
           
           <Image>
           <img src={image}></img>
           </Image>
           <Description>
            <h5>{descr}</h5>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            <p>₹ {price} </p>
            
            <button onClick={addToBasket} >Add to Cart</button>
           </Description>
        </Container>
    )

}

const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-color:#fff;

z-index:10;    
`;
const Image=styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 40%;

img{
    width:200px;
    height:200px ;
}
`;
const   Description=styled.div`
width:90%;
margin:auto;
display: flex;
flex-direction:column;
justify-content:space-evenly;
flex: 0.7;
h5{
    font-size: 16px;
    font-weight:600;
    height:40px;
    
}
p{
    font-weight:600;
}
button{
    width:100%;
    height: 33px;
    background-color: #fa8900;
    border:none ;
    border-radius:10px;
    cursor: pointer;
}

`;