import React from 'react'
import styled from 'styled-components';
import justify from '../../../assets/testimony.jpg'
import bg from '../../../assets/test.jpg'
// import bg from '../../../assets/testimonybg.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TestimonyItem from './TestimonyItem';
import { testimony } from '../../../data/data';
const Wrapper = styled.section`
display: flex;
justify-content: center;
background: #000000c4 url(${props => props.url}) no-repeat center ;
background-size: cover;
background-blend-mode: darken;
align-items: center;
    height: 100vh;
`
const Container = styled.div`
    display: flex;
    gap:.5rem;
    align-items: flex-start;
    width: 100%;
    max-width: 1024px;

`
const ImageContainer = styled.div`
display: none;
@media screen and (min-width: 768px) {
    display: block;
    flex: .6;
position: relative; 
}

`
const DescriptionContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap:1rem;
max-width: 600px;
`
const Image = styled.img`
max-width: 100%;
height: auto;
object-fit: contain;
border-radius:1rem;
`
const Description = styled.p`
letter-spacing: 2px;
color: #000000e0;
`

const SwiperContainer = styled.div`
display: flex;
height: auto;
.swiper{
    width: 100%;
    height: auto;
}
`
const Header = styled.h2`
text-transform: uppercase;
color: #24d33e;
font-family: Georgia, 'Times New Roman', Times, serif;
`
const Title = styled.h1`
text-transform: capitalize;
font-size: 2.5rem;
font-weight: bolder;
color: white;
`
const Testimony = () => {
  return (
    <Wrapper url = {bg}>

    <Container>
        <DescriptionContainer>
            <Header>testimonial</Header>
            <Title>what our client say</Title>
            <SwiperContainer>
                  <Swiper
                className='swiper'
                spaceBetween={0}
                autoplay={{
                    delay: 3000,
                }}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
            >
              {
                testimony.map(item =>(
                  <SwiperSlide key={item.id} >
                <TestimonyItem {...item} />
              </SwiperSlide>
                ) )
              }
            </Swiper>
            </SwiperContainer>
        </DescriptionContainer>
          <ImageContainer  >
            <Image src={justify} />
        </ImageContainer>
    </Container>
    </Wrapper>
  )
}


export default Testimony