import React from 'react'
import styled from 'styled-components';
import url from '../../assets/servicesBanner2.jpg'
const Image = styled.img`
    width: 100%;
    height: 70vh;




    
    object-fit: cover;
`
const Banner = () => {
  return (
    <Image src={url} />
  )
}

export default Banner