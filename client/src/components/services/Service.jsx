import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DateRange from './DateRange';
import Model from '../../components/model/Model'
import Booking from './Booking';
const Container = styled.div`
padding: 1rem;
gap: 1rem;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        :nth-child(even){
            flex-direction: row-reverse;
        }
        
    }
`
const ImageContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: auto;
max-height: 450px;
object-fit: cover;
flex: 1;
`
const DescriptionContainer = styled.div`
flex: 1;
padding:.5rem;
display: flex;
flex-direction: column;
gap:.5rem;
`
const Title = styled.h1`
 font-size:2rem;
  color: #D9A800;
  text-transform: capitalize;
  `
const Description = styled.p`
color: #c2bebe;
font-size:1.2rem;
font-weight: 100;
`
const Price = styled.h3`
color: #24D33E;
font-weight: 100;
&.tag{
    font-weight: bold;
color: #D9A800;

}
`
const Control = styled.div`
padding: 1rem 2rem;
border-radius: 2rem;
background-color: #D9A800;
text-transform: capitalize;
cursor: pointer;
text-align: center;
font-size: 1.5rem;
color: white;
/* max-width: 200px; */
animation: animate 500ms  ease-in-out 1000ms infinite alternate;
:hover,
&.booked{
    animation-play-state: paused;
    color: white !important;
}
@keyframes animate {
    0%{
        transform: scale(1);
        color: #24D33E;
    }
    50%{
        color: #14d7cd;
    }
    70%{
        
        color: white;
    }
    100%{
        color: #0A1026;
        
        transform: scale(1.1);
    }
}
`
const ControlsContainer = styled.div`
display: flex;
align-items: center;
padding: 1rem;
position: relative;
`
const Service = ({title,price,img,description,_id,priceNumber}) => {
    const [booked,setBooked] = useState(false);
     const [date,setDate] = useState(null);
     const [showModel,setShowModel] = useState(false);
     console.log(date);
    const handleClick = ()=>{
        // setBooked(true);
        setShowModel(true);
    }

    useEffect(()=>{
        if(date){
            console.log(date);
            // setShowModel(true);
        }
    },[date])
  return (
    <Container>
        <ImageContainer>
            <Image  src={img} />
        </ImageContainer>
        <DescriptionContainer>
            <Title> {title} </Title>
            <Description> {description} </Description>
            <Price className='tag' >At a very affordable price</Price>
            <Price> {priceNumber} {price} </Price>
            <ControlsContainer>
                <Control onClick={handleClick} className={(date || booked) && 'booked'} > {date ? `booked this service on ${date?.toString().substring(0,16)} `:'book now'} </Control>
                {/* {
                    booked &&
             <DateRange setDate={setDate} date ={date}  setBooked = {setBooked} />
                }  */}
            </ControlsContainer>
        </DescriptionContainer>
        {
            showModel &&
        <Model center  close={setShowModel} bg=' #000000a1' >
            <Booking title ={title} priceNumber={priceNumber}  price = {price} img = {img} description ={description} _id ={_id} />
        </Model>
        }
    </Container>
  )
}

export default Service