import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";

 const Home=function (){
    
    return(
        
       <Container>
        <Navbar ></Navbar>
        <Banner>
            <img src="/banner.jpg" alt="loading" />
            <img src="/mobile_banner.jpg" alt="loading" />
        </Banner>
        <Main>
            
            <Card 
           
            image="https://m.media-amazon.com/images/I/41h8nAsiOQL._SX300_SY300_QL70_FMwebp_.jpg" alt="loading.."
            descr="HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD"
            rating={3.5}
            price={35000}>
            </Card>
            <Card 
            
            image="https://m.media-amazon.com/images/I/41h8nAsiOQL._SX300_SY300_QL70_FMwebp_.jpg" alt="loading.."
            descr="HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD"
            rating={2.5}
            price={47000}>    
            </Card>
            
            
        </Main>
       </Container> 
       
    )
};

const Container=styled.div`
    width: 100%;
`;
const Banner=styled.div`
img{
    width:100%;
    -webkit-mask-image:linear-gradient(to bottom,
        rgba(0,0,0,2),
        rgba(0,0,0,0.95),
        rgba(0,0,0,0.85),
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.55),
        rgba(0,0,0,0));

        &:nth-child(2){
            display: none;
        }
        @media only screen and (max-width:768px){
            //width<768px (atmost width 768px)
            &:nth-child(1){
            display: none;
        }
        &:nth-child(2){
            display:block;
            -webkit-mask-image:none;

        }
  }
    
}
  
`;
const Main=styled.div`
display:grid;
justify-content:center;
place-items:center;
width: 100%;
/* grid-template-rows:380px 380px; */
grid-auto-rows:380px ;//height 
grid-template-columns:repeat(4,300px);//width
grid-gap: 20px;
background-color: rgb(234,237,237);

//mobile version (2 col)
@media only screen and (max-width:767px){
    grid-template-columns:repeat(2,50%);
    grid-gap:0px;
}
//tablet version (3 col)
@media only screen and (min-width:767px) and (max-width:1200px){
    grid-template-columns:repeat(3,30%);
    
}
@media only screen and (min-width:767px){
    margin-top:-130px;//  overlap from top
    padding:10px  0px;//top right
    
}

`;

export default Home;