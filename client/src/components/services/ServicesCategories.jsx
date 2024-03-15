import React from 'react'
import styled from 'styled-components';
import Service from './Service';
import { services } from '../../data/data';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const ServicesCategories = () => {
  return (
    <Container>
      {
        services.map(item => <Service key={item._id} {...item} /> )
      }
    </Container>
  )
}

export default ServicesCategories