import {Description, ShoppingCart } from '@mui/icons-material';
import { IconButton, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CartProduct from './CartProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../context/cartSlice';
import { useNavigate } from 'react-router-dom';
import {increase as increaseItem ,decrease as decreaseItem} from '../../context/cartSlice'
const Container = styled.div`
display: flex;
flex-direction: column;
box-shadow:0 0 3px 5px #f0f0f08d;
gap:.5rem;
justify-content: space-between;
    background-color: white;
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`
const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
   &.small{
    max-height: 300px;
    object-fit: contain;
  }
`

const ControlContainer = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
padding:.5rem;
  
`
const LabelWrapper = styled.div`
display: flex;
align-items: center;
gap:.5rem;
  
`
const Title = styled.h1`
color: #D9A800;
`
const Price = styled.p`
color: #D9A800;

`
const AddToCartButton = styled.button`
   padding: 1rem 2rem;
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
:disabled{
  cursor: not-allowed;
  background-color: gray;
}
`
const QuantityWrapper = styled(LabelWrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Quantity = styled(AddToCartButton)`
background: transparent;
border:1px solid #D9A800;
color: #D9A800;
padding:1rem;
`
const Category = ({img,title,price,cart,_id,description}) => {
  const userID = useSelector(state => state.user.currentUser?._id);
  const productCart = useSelector(state => state.cart);
  const [incart,setIncart] = useState(productCart.cartItems?.some(item => item._id === _id ) );
  const user = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();
const [show,setShow] = useState(false);
     const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);
    const increase = (e)=>{
        e.stopPropagation();
        setQuantity(prev => prev + 1)
        dispatch(increaseItem(_id))
        
      }
      const decrease = (e)=>{
      e.stopPropagation();
        setQuantity(prev => prev > 1 ? prev -1:prev)
        dispatch(decreaseItem(_id));

    }
      const showModel = ()=>{
        if(user){
           setShow(true)
        }else{
          navigate('/auth/login')
        }

    }
      const addItem = (e)=>{
        // console.log('adding',_id);
      // e.stopPropagation();
      dispatch(addToCart(
        { 
        _id,
        productImage: {url: img },
        price,
        description,
        quantity,
        userID
      }
        ))
    }
    useEffect(()=>{
      setIncart(productCart.cartItems?.some(item => item._id === _id ) )
    },[productCart,_id])

    // useEffect(()=>{
    //   dispatch(incre)
    // },[quantity])
  return (
    <Container>
      <ImageContainer  >
      <Image className={cart && 'small'} src={img} alt={title} />

      </ImageContainer>
      <ControlContainer>
        <Title> {title} </Title>
        <LabelWrapper>
          {/* <Label>Price</Label> */}
        <Price> Ksh. {price} per item </Price>
        </LabelWrapper>
        {
          (cart)?<>
          <QuantityWrapper className={incart && 'horiz'} >
          <IconButton onClick={increase} >  + </IconButton>
          <Quantity> {quantity} </Quantity>
          <IconButton onClick={decrease} > - </IconButton>
        </QuantityWrapper>
        <AddToCartButton disabled ={incart} onClick={addItem} > {incart ?'IN CART':'add to cart'} { !incart && <ShoppingCart/>}</AddToCartButton>
          </> :
          <>
          <Rating readOnly  value={3.5}/>
          <AddToCartButton disabled ={incart} onClick={showModel} > {incart ?'IN CART':'add to cart'} { !incart && <ShoppingCart/>}  </AddToCartButton>
          
          </>
        }
      </ControlContainer>
      {
        show && <CartProduct close={setShow} img={img} title={title} price={price} _id={_id} decscription ={description} />
      }
    </Container>
  )
}

export default Category