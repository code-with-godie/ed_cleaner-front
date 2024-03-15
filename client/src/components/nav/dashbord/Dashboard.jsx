import React from 'react'
import styled from 'styled-components';
import bg from '../../assets/bg2.jpg'
import BusinessInfo from '../../components/dashboard/BusinessInfo';
import Header from './Header';
const Container = styled.div`
flex: 3.5;
overflow: auto;
display: flex;
flex-direction: column;
gap:1rem;
`
const Dashboard = () => {
  return (
    <Container bg = {bg} >
         <Header/>
        <BusinessInfo/>
    </Container>
  )
}

export default Dashboard