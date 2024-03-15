import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DateRange from './DateRange';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
   width: 100%;
   max-width: 800px;
   /* background-color: red; */
`
const Container = styled.div`
flex: 1;
    max-width: 370px;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const ImageContainer = styled.div`
display: flex;
`
const Image = styled.img`
width: 100%;
height: auto;
object-fit: contain;
max-height: 350px;
flex: 1;
`
const DescriptionContainer = styled.div`
padding:.5rem;
display: flex;
flex-direction: column;
gap:.5rem;
`
const Title = styled.h1`
text-align: center;
 font-size:1.5rem;
  color: #D9A800;
  text-transform: capitalize;
  padding:.5rem;
  `
const Description = styled.p`
color: #c2bebe;
font-size:1.2rem;
font-weight: 100;
`
const Price = styled.h3`
color: #24D33E;
font-weight: 100;
text-align: center;
&.tag{
    font-weight: bold;
color: #D9A800;

}
`
const Control = styled.div`
width: 100%;
padding: 1rem;
/* border-radius: 2rem; */
background-color: #D9A800;
text-transform: capitalize;
cursor: pointer;
text-align: center;
font-size: 1.5rem;
color: white;
/* max-width: 200px; */
/* animation: animate 500ms  ease-in-out 1000ms infinite alternate; */
:hover,
&.booked{
    animation-play-state: paused;
    color: white !important;
}
`
const ControlsContainer = styled.div`
display: flex;
align-items: center;
padding: 1rem;
position: relative;
`
const Booking = ({img,title,price}) => {
    const [date,setDate] = useState(null);
    const [picker,setShowPicker] = useState(false)
    const handleClick = (e)=>{
        e.stopPropagation()
    }

    useEffect(()=>{
        console.log('date changed',date);
        if(date){
            console.log(date);
        }
    },[date])
  return (
    <Wrapper>
        <Container onClick={handleClick} >
        <Title> {title} </Title>
        <ImageContainer>
            <Image src={img} />
        </ImageContainer>
          <DescriptionContainer>
            <Price> {price} </Price>
            <ControlsContainer>
                <Control onClick={()=> setShowPicker(true)} >book this service</Control>
            </ControlsContainer>
        </DescriptionContainer>
    </Container>
       {picker && <DateRange  setDate={setDate} setShowPicker ={setShowPicker} />}
    </Wrapper>
  )
}

export default Booking