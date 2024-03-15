import React from 'react'
import styled from 'styled-components';
import {Outlet} from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Bottomnav from '../../components/nav/Bottomnav';
const Container = styled.main`
    height: 100vh;
    overflow: auto;
`
const AppLayout = () => {

  return (
    <Container>
      <Header/>
        <Outlet/>
        <Footer/>
        <Bottomnav/>
    </Container>
  )
}

export default AppLayout