import { Logout } from '@mui/icons-material';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../../context/userSlice';
const Container = styled.div`
    padding: 2rem 1rem;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Title = styled.h1`
    color: white;
    text-align: center;
    text-transform: capitalize;
`
const Button = styled.button`
   padding: 1rem 2rem;
border-radius: 2rem;
background-color: #D9A800;
text-transform: capitalize;
cursor: pointer;
display: flex;
align-items: center;
gap:.5rem;
text-transform: capitalize;
color: white;
font-size: 1rem;
justify-content: center;
border: none;
outline: none;
`
const LogoutModel = ({setLogout}) => {
    const dispatch = useDispatch();
    const handleClick = ()=> {
        setLogout(false);
        dispatch(logout());
    }
  return (
    <Container>
        <Title>click the button to logout out</Title>
        <Button onClick={handleClick} >
            <Logout/>
            logout
        </Button>
    </Container>
  )
}

export default LogoutModel