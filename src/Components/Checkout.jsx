import React from "react";
import { useStateValue } from "../StateProvider"
import styled from "styled-components";
import Navbar from './Navbar'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

export default function Checkout(){
const [{basket},dispatch]=useStateValue();
console.log(basket)
const removeFromBasket=(e,id)=>{
    e.preventDefault();
dispatch ({
    type:"REMOVE_FROM_BASKET",
    id:id
})
}
const navigate=useNavigate();


    return(
       <Container>
        <Navbar/>
        <Main>
        <ShoppingCart>
            <h2>Shopping Cart</h2>
           { basket.map((product)=>{
            return(
            <Product>
               <Image>
               <img src={product.image}></img>
               </Image>
               <Description>
                <h4>
                {product.descr}
                </h4>
                <p>₹ {product.price}</p>
                <button onClick={(e)=>{
                    console.log(product)
                    removeFromBasket(e,product.id)}}>Remove</button>
               </Description>
               
            </Product>
            )
           })}
            
            
        </ShoppingCart>
        <Subtotal>
            <CurrencyFormat renderText={(value)=>{
                return(
                <>
                  <p>
                    Subtotal({basket.length} items): <strong>{value}</strong> 
                  </p>
                
                 
                 <small>
               <input type="checkbox" />
               <span>This order contains a gift</span>
               </small>
              
               </>
                )
                
             } } 
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType='text'
             thousandSeparator={true}
             prefix="₹ "
             />
             
          <button onClick={()=>navigate('/address')} >Proceed to Checkout</button>
        </Subtotal>
        
        </Main>
        
       </Container>

    )
}

const Container=styled.div`
width:100%;
height: 100%;
background-color:rgb(234,237,237);   
`
const Main=styled.div`
display: flex;
padding: 15px;
background-color:rgb(234,237,237);   
@media only screen and (max-width:1200px){
    flex-direction: column;
}

`;
const ShoppingCart=styled.div`
padding: 15px;
background-color:#fff;
flex:0.7;


h2{
   font-weight:500;
   border-bottom:1px solid lightgrey;
   padding-bottom:15px; 
}
`;
const Product=styled.div`
display:flex;
align-items: top;
height:fit-content;

`;
const Image=styled.div`
flex: 30%;
padding-right:25px;
img{
width:100%;
}
`;
const Description=styled.div`
flex: 70%;
display: flex;
flex-direction:column;





h4{
    font-weight:600;
    font-size: 18px;
    
}
p{
    font-weight: 600;
    margin-top:-10px; 
   
}
button{
    border:none;
    background-color:transparent;
    color: #1384b4;
    cursor: pointer;
    display:flex;
    
    position: relative;
   bottom:10px;
    
    &:hover{
        text-decoration: underline;
    }

}

`;



const Subtotal=styled.div`
flex:0.3;
padding:15px;
margin-left: 10px;
height:200px;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width:1200px){
    margin-left:0px;
    margin-top:20px;
}

button{
    background-color: #ffd814;
    border:none;
    border-radius:8px;
    width: 80%;
    height: 33px;
    margin-top:20px;
    cursor: pointer;
    
    
}
p{
    font-size: 20px;
}
small{
    display: flex;
    align-items: center;
    
    margin-top:-7px;
    
    span{
        margin-left:10px;
    }
}

`;