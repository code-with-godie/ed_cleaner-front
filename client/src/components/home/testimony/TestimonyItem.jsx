import { QuizTwoTone } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
`
const Top = styled.div`
padding: 1rem;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
.profile{
    width: 100px;
    height: 100px;
}
@media screen and (min-width: 768px){
    
    justify-content: space-between;
 }
`
const Profile = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) {
        
        flex: 1;
    }
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
    align-items: center;
`
const Profession = styled.h3`
color: white;
text-transform: capitalize;
`
const Name = styled.h2`
font-size: large;
font-weight: bold;
color: #EDB701;
text-transform: capitalize;
`
const Bottom = styled.div`
`
const Description = styled.p`
color: white;
font-weight: 100;
font-size: 1.5rem;
font-style: italic;
`
const TestimonyItem = ({name,proffesion,description,profile}) => {
  return (
    <Container>
        <Top>
            <Profile>
                <IconButton>
                <Avatar className='profile' src={profile} alt={name}   />

                </IconButton>
            </Profile>
            <Details>
                <Name> {name} </Name>
                <Profession> {proffesion} </Profession>
            </Details>
        </Top>
        <Bottom>
            <Description> {description} </Description>
        </Bottom>
    </Container>
  )
}

export default TestimonyItem