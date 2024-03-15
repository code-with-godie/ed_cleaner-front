import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/home/banner/Banner';
import Services from '../../components/home/services/Services';
import Justify from '../../components/home/justify/Justify';
import Contacts from '../../components/home/contact/Contacts';
import About from '../../components/home/about/About';
import Testimony from '../../components/home/testimony/Testimony';
const Container = styled.div`
  min-height: 100%;
`
const Home = () => {
  return (
    <Container>
      <Banner/>
      <Contacts/>
      <About/>
      <Services/>
      <Justify/>
      <Testimony/>
    </Container>
  )
}

export default Home