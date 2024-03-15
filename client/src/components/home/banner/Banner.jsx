import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';
import { slider } from '../../../data/data'
const Container = styled.div`
  height: 80vh;
  background-color: red;
  .swiper{
    width: 100%;
    height: 100%;
  }
`
const Banner = () => {
  return (
    <Container>
         <Swiper
                className='swiper'
                spaceBetween={0}
                navigation
                  pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay,Pagination]}
            >
              {
                slider.map(item => (<SwiperSlide>
              <Slide gif url={item.id} key={item.id}  {...item} />

              </SwiperSlide>) )
              }
              
    
            </Swiper>
    </Container>
  )
}

export default Banner