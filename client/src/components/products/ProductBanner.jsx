import React from 'react'
import styled from 'styled-components';
import bg from '../../assets/servicebg.png'
const Wrapper = styled.div`
   background-color: #E3E6E6;
   display: flex;
   justify-content: center;
`
const Container = styled.div`
    height: 350px;
    width: 100%;
    /* max-width: 1024px; */
    background: url(${props => props.bg}) no-repeat left top ;
    background-size: cover;
    margin: 0 auto;
`
const ProductBanner = () => {
  return (
    <Wrapper>
      <Container bg = {bg} />

    </Wrapper>
  )
}

export default ProductBanner