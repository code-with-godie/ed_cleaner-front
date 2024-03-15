import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/services/Banner';
import ServicesCategories from '../../components/services/ServicesCategories';
const Container = styled.div`
  
`
const Title = styled.h1`
  text-transform: capitalize;
  text-align: center;
  padding:2rem .5rem;
  font-size:3rem;
  color: #D9A800;
`
const Services = () => {
  return (
    <Container>
      <Banner/>
      <Title>our services</Title>
      <ServicesCategories/>
    </Container>
  )
}

export default Services