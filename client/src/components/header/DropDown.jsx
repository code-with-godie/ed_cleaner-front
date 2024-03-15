import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
    position: absolute;
    top:70px;
    width: 100%;
    max-width: 300px;
    height: auto;
    min-height: 100px;
    background-color: white;
    box-shadow:0 0 5px 3px gray;
    z-index: 90000000000000000000000000000000 !important; 
    cursor: pointer;
`
const Item = styled.p`
text-transform: capitalize;
color: #0A1026;
font-weight: 500;
:hover{
        color: #D9A800;
    }
font-size: 1.2rem;
    :not(:last-child){
        border-bottom: 1px dotted black;
    }
    padding:.7rem;
`
const DropDown = () => {
    const navigate = useNavigate();
  return (
    <Container>
        <Item  onClick={()=> navigate('/products')} >Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
        <Item>Detergents</Item>
    </Container>
  )
}

export default DropDown