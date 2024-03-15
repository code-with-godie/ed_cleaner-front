import React from 'react'
import styled from 'styled-components';
import { LocationOn,Drafts, Phone } from '@mui/icons-material'
const Wrapper = styled.div`
  /* background-color: yellow;
  display: flex;
  justify-content: center; */
`
const Container = styled.div`
  height: 200px;
  background-color: #FFC600;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
const Item = styled.div`
  flex: 1;
  display: flex;
  gap:.5rem;
  align-items: center;
  justify-content: center;
  &.center{
    background-color: #23A036 ;
  }
  .icon{
    font-size: 4rem;
  }
  .location,
  .phone{
    color: #23A036;
  }
  .email{
    color: #FFC600;

  }
`
const ItemIcon = styled.div`

`
const ItemDescription = styled.div`
display: flex;
flex-direction: column;
gap:.3rem;
`
const Title = styled.h3`
text-transform: capitalize;
color: #000000e6;
font-size: 1.2rem;
`
const Info = styled.p`
color: white;
font-size: 1.2rem;
font-weight: 100;
`
const Contacts = () => {
  return (
    <Wrapper>

    <Container>
      <Item>
        <ItemIcon>
          <LocationOn className='icon location' />
        </ItemIcon>
        <ItemDescription>
          <Title>our office</Title>
          <Info>Kasarani,Nairobi,Kenya</Info>
        </ItemDescription>
      </Item>
      
      <Item className='center' >
         <ItemIcon>
          <Drafts className='icon email' />
        </ItemIcon>
        <ItemDescription>
          <Title>email us</Title>
          <Info>ed_cleaners@gmail@gmail.com</Info>
        </ItemDescription>

      </Item>
      <Item>
         <ItemIcon>
          <Phone className='icon phone' />
        </ItemIcon>
        <ItemDescription>
          <Title>call us</Title>
          <Info> +254 757749043</Info>
        </ItemDescription>

      </Item>
    </Container>
    </Wrapper>
  )
}

export default Contacts