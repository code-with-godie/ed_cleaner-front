import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Service from './Service';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useFetch} from '../../../api/useFetch'
import LoadingAnimation from '../../../components/loading/LoadingAnimation'
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
background-color: beige;
`
const Container = styled.div`
   /* height: 90vh; */
   display: flex;
    flex-direction: column;
    gap: 1rem;
    padding:.5rem;
    padding-top: 2rem;
    align-items: center;
    width: 100%;
    max-width: 1400px;
`
const Title = styled.h1`
font-size: 2.3rem;
color: #D9A800;
flex: 1;
text-transform: capitalize;
text-align: center;
`
const Description = styled.p`
color: #23A036;
text-transform: capitalize;
text-align: center;

`
const Top = styled.div`
max-width: 900px;
padding:.5rem;
display: flex;
flex-direction: column;
gap:.5rem;
`
const SwiperContainer = styled.div`
width: 100%;
padding:.5rem;
.swiper{
    width: 100%;
    height: 100%;
  }
`
const Services = () => {
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
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <Wrapper>

    <Container>
      <Top>
        <Description>what we are offering</Description>
        <Title>providing the best services for our customers</Title>
      </Top>
      <SwiperContainer>
        <Carousel 
        
         infinite={true}
        autoPlay={true}
         autoPlaySpeed={2000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}>
          {
            services.map(item => <Service {...item} key= {item._id} /> )
          }
        </Carousel>
      </SwiperContainer>
    </Container>
                  </Wrapper>
  )
}

export default Services