import React from 'react'
import styled from 'styled-components';
import icon1 from '../../../assets/icon-1.png'
import service from '../../../assets/general.jpg'
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    display: flex;
    /* width: 500px; */
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    background-color: white;
    /* border-radius:.3rem; */
    box-shadow:0 0 3px 2px gray;
`
const ImageContainer = styled.div`
    padding:.5rem;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
color: #D9A800;
flex:  1;
text-align: center;
font-size: 1.2rem;
text-transform: capitalize;
`
const Image = styled.img`
`
const ImageView = styled.img`
width: 100%;
height: auto;
object-fit: cover;
`
const Service = ({title,image}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={()=> navigate('/services')} >
       <ImageContainer>
        <Image src={icon1} />
       </ImageContainer>
       <Title> {title} </Title>
       <ImageView src={image} />
    </Container>
  )
}

export default Service