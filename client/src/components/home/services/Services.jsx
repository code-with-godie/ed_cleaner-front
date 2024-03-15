import React from 'react'
import styled from 'styled-components';
import Service from './Service';
import service1 from '../../../assets/sercive1.jpg'
import service2 from '../../../assets/service2.jpg'
import service3 from '../../../assets/service3.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
          <Service image={service1} title='General house cleaning' />
          <Service image={service2} title='Car interior cleaning' />
          <Service image={service3} title='Sofas/ coaches cleaning' />
          <Service image={service1} title='Carpet cleaning' />
          <Service image={service1} title='Mattress cleaning ' />
          <Service image={service1} title='General house cleaning' />
          <Service image={service1} title='Deep cleaning' />
          <Service image={service1} title='Rodent Control' />
          <Service image={service1} title='Spider Control' />
          <Service image={service1} title='Wasp and Bee Control' />
          <Service image={service1} title='Ant Control' />
          <Service image={service1} title='Mosquito Control' />
          <Service image={service1} title='Cockroach Control' />
          <Service image={service1} title='Bedbug Control' />
        </Carousel>
      </SwiperContainer>
    </Container>
                  </Wrapper>
  )
}

export default Services