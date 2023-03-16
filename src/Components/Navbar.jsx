import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

 const Navbar=()=>{
    const [{basket}]=useStateValue();
    const navigate=useNavigate();
   // console.log("basket=>",basket)
    const logoPath="/amazon_logo1.png";
    const searchIcon="/searchIcon.png";
    const basketIcon="/basket-icon.png"

    return(
        <Container>
            <Inner>
            <Logo>
              <img src={logoPath} alt="loading"></img>  
            </Logo>
            <SearchBar>
                <input type="text"placeholder="Search..." />
                <img src={searchIcon} alt="loading" ></img>
            </SearchBar>
            
            <RightContainer>
            <NavBtn>
                    <p></p>
                    <p onClick={()=>navigate('/login')}>Login</p>
                </NavBtn>
                <NavBtn>
                    <p>Hello,</p>
                    <p>Guest</p>
                </NavBtn>
                <NavBtn>
                <p>Return</p>
                <p>& Orders</p>
                </NavBtn>
                <BasketBtn onClick={()=>navigate('/checkout')}>
                    <img src={basketIcon}alt="loading"></img>
                   <p>{basket.length}</p> 
                </BasketBtn>
            </RightContainer>
            </Inner>
            <MobileSearchBar>
            <input type="text"placeholder="Search..." />
                <img src={searchIcon} alt="loading" ></img>

            </MobileSearchBar> 
        </Container>
    )
};

const Container=styled.div`
background-color: black;
display: flex;
flex-direction: row;
height: 60px;
width:100%;
align-items: center;
padding-left:20px;
@media only screen and (max-width:1240px){
     height: 120px;
     display: flex;
     flex-direction:column;
    

}
    
`;
const Inner=styled.div`
width: 100%;
display: flex;
align-items:center;
@media only screen and (max-width:1240px){
    justify-content:space-between;
    
    

}

`;
// SearchBar for Mobile and Tablet 
const MobileSearchBar=styled.div`
min-width: 290px;
input{
    width:80vw;
    height: 32.3px;
    border: none ;
    outline:none;
   border-top-left-radius:8px;
   border-bottom-left-radius:8px;
   font-size:15px; 
   padding-left:8px;
   
}
img{
    background-color:#febd69;
   border-top-right-radius:8px;
   border-bottom-right-radius:8px;
   height:32.8px;
    width:37px;
    padding:4px;
    position: relative;
    top:10.1px;   
}
@media only screen and (min-width:1240px){
    display:none;
}
`;
const Logo=styled.div`

img{
width:140px;
height:45px;
margin-top:10px;
cursor: pointer;
}
`;

const SearchBar=styled.div`
min-width:900px;


input{
    width:60vw;
    height: 32.3px;
    border: none ;
    outline:none;
   border-top-left-radius:8px;
   border-bottom-left-radius:8px;
   font-size:15px; 
   padding-left:8px;
   margin-left:10px;
   margin-bottom:5px;
}
img{
    background-color:#febd69;
   border-top-right-radius:8px;
   border-bottom-right-radius:8px;
   height:32.8px;
    width:37px;
    padding:4px;
    position: relative;
    top:10.1px;   
}

//whenever width less than 1240px search bar will disappear
@media only screen and (max-width:1240px){
    display:none;

}
`;



const RightContainer=styled.div`
color: white;
display: flex;
flex-direction: row;
margin-left:40px;
align-items: center;
margin-right:10px;


`;
const NavBtn=styled.div`

 
  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  margin-right:30px ;
  p{
    margin:0px;
    &:nth-child(1){
        font-size: 14px;
    }
    &:nth-child(2){
        font-size:17px;
        font-weight:600;
        
    }
  }
 
`;
const BasketBtn=styled.div`
cursor: pointer;
display: flex;
flex-direction: row;
align-items:center;
img{
    width:30px;
    
    margin-right:10px;
    
}
p{
    color: white;
    font-weight: 500;
}

    
`;
export default Navbar;
