import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import Product from './Product';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../loading/LoadingAnimation';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
    padding:.5rem;
    background-color: white;
`

// const Title = styled.h2`
//     display: flex;
//     flex-direction: column;
//     gap:.5rem;
//     text-transform: capitalize;
//     color: #000000d8;
//     padding: 1rem 0;
// `
const ProductList = styled.div`
height: 300px;

`
const Products = ({title}) => {
  const [products,setProducts] = useState([]);
  const {data,loading,error} = useFetch('/products/category');

  useEffect(()=>{
    if(data){
      setProducts(data?.products);
    }
  },[data])
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
  }
  return (
    <Container>
        <ProductList>
          {
            error ? <h1>something went wrong</h1>: loading?<LoadingAnimation/>:
            <Carousel 
         infinite={true}
        autoPlay={true}
         autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}>
            {
                // Array(10).fill(<Product/>)
                products.map(item => <Product key={item._id} {...item} />)
            }
        </Carousel>
          }
        </ProductList>
    </Container>
  )
}
export default Products