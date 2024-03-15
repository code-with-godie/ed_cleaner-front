import React, { useEffect, useState } from 'react'
import { useFetch } from '../../api/useFetch'
import LoadingAnimation from '../../components/loading/LoadingAnimation'
import styled from 'styled-components';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
const Container = styled.div`
  display: flex;
  gap:.5rem;
  flex-direction: column;
`
const Category = styled.p`
`
const CatVerticalNav = ({filterProducts,slug}) => {
  const [cat,setCat] = useState([]);

const {data,loading,error} = useFetch('/products/title');

useEffect(()=>{
  if(data){
    setCat(data?.categories);
    console.log(data);
  }
},[data])

if(loading){
  return <LoadingAnimation/>
}
if(error){
  return <h1>somethiung went wrong</h1>
}
  return (
    <Container>
            <RadioGroup>
        <FormControlLabel onClick={(e)=> filterProducts(e.target.value)}  value='all' control={<Radio checked = {slug === 'all'} sx={
          {color:'#27272F', '&.Mui-checked':{color:'#5B3901'}}} />} label ={'All'} />
      {
        cat.map(item =>{
            return  <FormControlLabel onClick={(e)=> filterProducts(e.target.value)} key={item} value={item} control={<Radio checked = {slug === item}  sx={
          {color:'#27272F', '&.Mui-checked':{color:'#5B3901'}}} />} label ={item} />
        })
      }
      </RadioGroup>
    </Container>
  )
}

export default CatVerticalNav 