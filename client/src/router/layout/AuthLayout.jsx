import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import bg from '../../assets/authbg.jpg'
const Wrapper = styled.section`
min-height: 60vh;
display: flex;
align-items: center;
justify-content: center;
padding:.5rem;
background: #000000d8 url(${props => props.bg}) no-repeat center;
background-size: cover;
background-blend-mode: darken;
`
const Container = styled.section`
width: 100%;
max-width: 600px;
min-height: 200px;
background-color: #28313c3c;
position: relative;
padding:.5rem;
display: flex;
flex-direction: column;
gap: 1rem;
.logo{
  width: 100px;
  height: 100px;
  position: absolute;
  cursor: pointer;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: red;
}
`
const ControlWrapper = styled.div`
display: flex;
`
const Control = styled.button`
flex: 1;
background: transparent;
color: #475257;
border: none;
color: white;
font-weight: 400;
font-size: 1.2rem;
cursor: pointer;
text-transform: capitalize;
&.active{
  color: #D9A800;
  text-decoration: underline;
}
`
const Title = styled.h1`
    text-transform: capitalize;
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 2rem;
    @media screen and (min-width:768px) {
        font-size: 3rem;
    }
`
const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active,setActive] = useState(true);

  useEffect(()=>{
    setActive(location?.pathname.startsWith('/auth/login'))
  },[location]);
  return (
    <Wrapper bg = {bg} >
      <Container>
        <Title> {active ? 'LOGIN':'REGISTER'} </Title>
        <ControlWrapper>
          <Control onClick={()=> navigate('/auth/register')} className={!active && 'active'} >Sign Up</Control>
          <Control onClick={()=> navigate('/auth/login')} className={active && 'active'} >Sign in</Control>
        </ControlWrapper>
        <Outlet/>
      </Container>
    </Wrapper>
  )
}

export default AuthLayout