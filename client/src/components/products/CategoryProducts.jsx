import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Category from './Category';
import { useFetch } from '../../api/useFetch'
import LoadingAnimation from '../../components/loading/LoadingAnimation'
const Container = styled.div`
    padding:.5rem;
    display: grid;
    grid-template-columns:repeat(auto-fill,minmax(300px,1fr)) ;
    gap:1rem;
`
const CategoryProducts = ({slug}) => {
  const [products,setProducts] = useState([]);
  const {loading,error,data} = useFetch(`/products/category?cat=${slug}`);
    useEffect(()=>{
    data && setProducts(data?.products)
    console.log(data?.products);
  },[data])
  if(loading){
    return <LoadingAnimation/>
  }
  if(error){
    return <h1>Something went wrong</h1>
  }
  return (
    <Container>
      {
        products?.map(product => (<Category key={product._id} {...product} />))
      }

    </Container>
  )
}

export default CategoryProducts