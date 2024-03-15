import { Home, OnlinePredictionSharp, SellRounded, ShoppingCart } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    position: fixed;
    bottom: 0;
    padding:.5rem;
    background-color: #0A1026;
    width: 100%;
    z-index: 10000000;
    display: flex;
    justify-content: space-between;
    gap:.5rem;
    align-items: center;
    @media screen and (min-width: 768px) {
        display: none;
    }
  
`
const Items = styled.div`
display: flex;
cursor: pointer;
flex-direction: column;
gap:.3rem;
.icon{
    font-size: 2rem;
    color: white;
}
`
const CartContainer = styled.div`
        border: 2px solid white;
        padding:1rem;
        border-radius: 50%;
    .icon{
    font-size: 1.5rem;
    color: white;
    @media screen and (min-width: 300px){
        font-size: 2rem;
    }
    @media screen and (min-width: 500px){
        
        font-size: 3rem;
    }
                  
}
 @media screen and (min-width: 500px){
    background-color: #0A1026;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    } 
`
const Label = styled.p`
color: white;
font-size: 1.3rem;
`
const Bottomnav = () => {
  return (
    <Container>
        <Items>
            <Home className='icon' />
            <Label>home</Label>
            </Items>
             <Items>
            <SellRounded className='icon' />
            <Label>services</Label>
            </Items>

        <CartContainer>
            <ShoppingCart className='icon' />
            </CartContainer>
             <Items>
            <OnlinePredictionSharp className='icon' />
            <Label>orders</Label>
            </Items>
           
        <Items>
            <Avatar className='icon' />
            <Label>profile</Label>
            </Items>
    </Container>
  )
}

export default Bottomnav