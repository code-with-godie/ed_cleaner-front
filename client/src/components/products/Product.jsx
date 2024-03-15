import React from 'react'
import styled from 'styled-components';
import product from '../../assets/product-1.webp'
import { Rating } from '@mui/material'
const Container = styled.div`
  /* background-color  : red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap:.5rem;
`
const Image = styled.img`
width: 150px;
height: 200px;
object-fit: contain;
`
const Name = styled.h2``
const Product = ({img,title}) => {
  return (
      <Container>
        <Image src={img} alt='product' />
        <Name> {title} </Name>
    </Container>
  )
}

export default Product