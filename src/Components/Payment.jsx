import styled from 'styled-components'
import Navbar from './Navbar';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'


export default function Payment(){
    const [{basket,address},dispatch]=useStateValue();
    const navigate=useNavigate();
    const elements=useElements();
     const stripe=useStripe();
    return (
      <Container>
        <Navbar></Navbar>
        <Main>
          <ReviewContainer>
            <h2>Review Your Order</h2>
            <AddressContainer>
              <h4>Shipping Address</h4>
              
              <div>
                <p>{address.name}</p>
                <p>{address.flat}</p>
                <p>{address.area}</p>
                <p>{address.landmark}</p>
                <p>
                  {address.city},{address.state}
                </p>
                <p>Phone: {address.phone}</p>
              </div>

            </AddressContainer>
            <PaymentContainer>
            <h4>Payment Method</h4>
            <div>
               <p>card details</p> 
               <CardElement/>
            </div>
            </PaymentContainer>
            <OrderContainer>
            <h4>Your Order</h4>
            
            {basket.map((product) => {
              return (
                <Product>
                  <Image>
                    <img src={product.image}></img>
                  </Image>
                  <Description>
                    <h4>{product.descr}</h4>
                    <p>₹ {product.price}</p>
                  </Description>
                </Product>
              );
            })}
            
            </OrderContainer>
          </ReviewContainer>
        
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => {
              return (
                <p>
                  Subtotal({basket.length} items): <strong>{value}</strong>
                </p>
              );
            }}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix="₹ "
          />
          <button >Place Order</button>
        </Subtotal>
        </Main>
      </Container>
    );
}


const Container=styled.div`
height:100%;
background-color:rgb(234,237,237);
width:100%;

`;
const Main=styled.div`
    padding:15px;
    display: flex;
    width: 100%;
    background-color:rgb(234,237,237);
    
    @media only screen and (max-width:1200px){
    
    margin-top:20px;
    flex-direction: column;
    
}
`;
const ReviewContainer=styled.div`
background-color:#fff;
flex:0.7;
padding: 15px;
h2{
    font-weight: 500px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
}
`;
const AddressContainer=styled.div`

margin-top:20px;

div{
    margin-left:10px;
    margin-top:-10px;
        p{
        margin-bottom: -15px;
        font-size:16px;
       
      } 
    }
    
`;
const PaymentContainer=styled.div`

margin-top:25px;
div{
    margin-left:10px;
    
    p{
        font-size:16px;
    }
}
    
`;
const OrderContainer=styled.div`
 margin-top:25px;  
 
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


`;
