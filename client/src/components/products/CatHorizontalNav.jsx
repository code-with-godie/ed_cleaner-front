import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    @media screen and (min-width: 768px) {
        display: none; 
        
}
`
const CatHorizontalNav = ({filterProducts}) => {
  return (
    <Container>CatHorizontalNav</Container>
  )
}

export default CatHorizontalNav