import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Service from './Service';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../loading/LoadingAnimation';
// import { services } from '../../data/data';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const ServicesCategories = () => {
  const [services,setServices] = useState([]);
  const {data,loading,error} = useFetch('/services');

  useEffect(()=>{
    data && setServices(data.services)
  },[data])
  if(loading){
    return <LoadingAnimation/>
  }
  if(error){
    return <h1>something went wrong</h1>
  }
  return (
    <Container>
      {
        services.map(item => <Service key={item._id} {...item} /> )
      }
    </Container>
  )
}

export default ServicesCategories