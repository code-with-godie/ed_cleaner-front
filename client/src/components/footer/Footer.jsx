import { FacebookRounded, Instagram, KeyboardArrowRight, LinkedIn, LocationOn, Phone, SmsSharp, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.footer`
  background-color: #0A1026;
  padding:.5rem;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr)) ;
  gap:2rem;
`
const Column = styled.div`
  display: flex;
  padding: 0%.5rem;
  flex-direction: column;
  gap:.5rem;
  .btn{
      background-color: white;
      &:hover{
        opacity: 1;
        background-color: white;
      }
    }
    .icon{
      color: #000000d3;
    }
`
const Title = styled.h1`
  font-size: 3rem;
  color: #D9A800;
  text-transform: capitalize;
`
const SmallTitle = styled.h2`
  font-size: 1%.5rem;
  color: #D9A800;
  text-transform: capitalize;
`
const Control = styled.div`
    display: flex;
    align-items: center;
    gap:.5rem;
    padding:.5rem;
    .icon{
      color: white;
    }
    .info{
      color: #D9A800;
    }
`
const Label = styled.p`
    color: white;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
    &.strong{
      font-weight: 500;
      font-size: 1.5rem;
    }
`
const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:.5rem;
      .arrow{
        font-size:2rem;
        cursor: pointer;
        color: white !important;
    }
`
const InputWrapper = styled.div`
display: flex;
border-radius: 2rem;
background-color: white;
`
const Input = styled.input`
flex: 1;
padding: 1rem;
border: none;
background: transparent;
min-width: 0;
outline: none;
`
const Button = styled.button`
flex: .4;
padding: 1rem;
border: none;
outline: none;
background-color: #D9A800 ;
border-top-right-radius: 2rem;
border-bottom-right-radius: 2rem;
font-size: 1rem;
text-transform: capitalize;
cursor: pointer;
`
const Bottom = styled.div`
padding:.5rem;
display: flex;
justify-content: space-between;
 background-color: #0A1026;
 padding: 1rem 0;
 border-top: 1px solid gray;
`
const Footer = () => {
  return (
    <>
    <Container>
      <Wrapper>
        <Column>
        <Title>Ed_cleaners</Title>
        <Label>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Iusto, officiis
            </Label>
            <Label className='strong' >Opening Hours:</Label>
            <Label>Mon - Sat, 8AM - 5PM</Label>
            <Label>Sunday: Closed</Label>
        </Column>
        <Column>
        <SmallTitle>get in touch</SmallTitle>
        <Control>
          <LocationOn className='info' />
          <Label>Kasarani,nairobi,Kenya</Label>
        </Control>
        <Control>
          <Phone className='info' />
          <Label>+254 722768448</Label>
        </Control>
        <Control>
          <SmsSharp className='info' />
          <Label>info@gmail.com</Label>
        </Control>
        <LinkWrapper>
        {/* <IconButton className='btn'>
             <FacebookRounded className='icon' />

        </IconButton>
        <IconButton className='btn'>
              <Instagram className='icon' />

        </IconButton>
        <IconButton className='btn'>
              <Twitter className='icon' />

        </IconButton>
        <IconButton className='btn' >
              <LinkedIn className='icon' />

        </IconButton> */}
          <Link to="https://www.facebook.com/profile.php?id=100087198264247">
            <IconButton className='btn'>
                    <FacebookRounded className='icon' />

            </IconButton>
                    </Link>
                    <Link to="https://www.instagram.com/nairobi_fumigation?igsh=MWEzeW90cWp2N2VhcA==">
                      <IconButton className='btn'>
                    <Instagram className='icon' />

                      </IconButton>
                    </Link>
                    <Link to="https://twitter.com/Eduz01?t=rFKE65oSUBlxO9hIDZQCsw&s=09">
                      <IconButton className='btn'>

                    <Twitter className='icon' />
                      </IconButton>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ed-pest-cleaners-039788283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <IconButton className='btn'>
                    <LinkedIn className='icon' />
                      </IconButton>
                    </Link>
        </LinkWrapper>
        </Column>
        <Column>
        <SmallTitle>quick links</SmallTitle>
        <Control>
          <KeyboardArrowRight className='arrow' /> 
          <Label>home</Label>
        </Control>
        <Control>
          <KeyboardArrowRight className='arrow' /> 
          <Label>our service</Label>
        </Control>
        <Control>
          <KeyboardArrowRight className='arrow' /> 
          <Label>our products</Label>
        </Control>
        <Control>
          <KeyboardArrowRight className='arrow' /> 
          <Label>our projects</Label>
        </Control>
        <Control>
          <KeyboardArrowRight className='arrow' /> 
          <Label>Contact us</Label>
        </Control>
        </Column>
        <Column>
        <SmallTitle>newsletter</SmallTitle>
        <Label>EdPest Cleaners is a reputable cleaning and fumigation company based in Kasarani, Nairobi. We provide top-notch services to ensure your home or business remains clean and pest-free.</Label>
        <InputWrapper>
        <Input placeholder='Enter your Email' />
        <Button>sign in</Button>
        </InputWrapper>
        </Column>
      </Wrapper>
    
    </Container>
      <Bottom>
        <Label>&copy; Ed_cleaners.All rights reserved {new Date().getFullYear()} </Label>
      </Bottom>
    </>
  )
}

export default Footer