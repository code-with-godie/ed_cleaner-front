import React, { useState } from 'react'
import Model from '../../components/model/Model'
import Category from './Category';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
max-width: 500px;
max-height: 90vh;
overflow: auto;
`
const CartProduct = ({img,title,price,close,_id,description}) => {
  

  return (
    <Model close={close} bg=' #000000a1' center >
        <Wrapper>
        <Category cart img = {img} title={title} price={price} _id={_id} description={description} />

        </Wrapper>
    </Model>
  )
}

export default CartProduct