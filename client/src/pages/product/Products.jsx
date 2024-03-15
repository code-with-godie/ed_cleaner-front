import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductBanner from '../../components/products/ProductBanner';
import Products from '../../components/products/Products';
import CatVerticalNav from '../../components/products/CatVerticalNav';
import CatHorizontalNav from '../../components/products/CatHorizontalNav';
import CategoryProducts from '../../components/products/CategoryProducts';
import { useLocation } from 'react-router-dom';
const Container = styled.section`
  min-height: 100vh;

`
const ProductsContainer = styled.article`
  display: flex;

  flex-direction: column;
  gap:1rem;
  background-color: #E3E6E6;
  padding-top: 1rem;
`

const CategotyWrapper = styled.div`
  display: flex;
  `
const Left = styled.div`
display:none;
@media screen and (min-width: 768px) {
  flex: 1;
  display: block;
  
}
`
const Right = styled.div`
flex: 3.5;
`
const ProductsList = () => {
  const [slug,setSlug] = useState('all');
  const location = useLocation()
  console.log(location);

  useEffect(()=>{
    location?.state?.slug && setSlug(location?.state.slug)
  },[location])
  return (
    <Container>
      <ProductBanner/>
      <ProductsContainer>
      <Products  />
      </ProductsContainer>
      <CategotyWrapper>
        <Left>
          <CatVerticalNav slug = {slug} filterProducts = {setSlug} />
        </Left>
        <Right>
          <CatHorizontalNav slug = {slug} filterProducts = {setSlug} />
          <CategoryProducts  slug = {slug} />
        </Right>
      </CategotyWrapper>
    </Container>
  )
}


export default ProductsList 