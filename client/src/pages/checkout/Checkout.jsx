import { KeyboardArrowLeft } from '@mui/icons-material';
import {RadioGroup } from '@mui/material';
import visa from '../../assets/visa.png'
import mpesa from '../../assets/mpesa.png'
import paypal from '../../assets/paypal.png'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PayWithCardButton from './PayWithCardButton';
import { postData } from '../../api/apiCalls';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
const Container = styled.div`
    padding: 1rem;
    width: 100%;
    max-width: 600px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    gap:.5rem;
`

const TitleWrapper = styled.div`
display: flex;
align-items: center;
gap:.5rem;
`
const Title = styled.h1` 
flex:1;
text-transform: capitalize;
color: #D9A800;
font-size: 1.8rem;
`
const TitleDescription = styled.p`
color: #D9A800;
font-size:1rem;
`
const PaymentMethodWrapper = styled.div`
display: flex;
gap:.5rem;
`
const PaymentMethod = styled.div`
flex: 1;
.wrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex:1;
    .container {
        border: 1px solid green;

    }
}
`
const PaymentMethodDescription = styled.div``
const InputWrapper = styled.div`
display: flex;
align-items: center;
flex:1;
gap:1rem;
padding:.5rem;
border-radius:.5rem;
justify-content: space-between;
outline: 1px dotted black;
border: none;
&.active{
    outline: 1px ridge #D9A800;
}
:not(.active):hover{
    outline: 1px ridge skyblue;
}
`
const Image = styled.img`
max-height: 50px;
width: auto;
object-fit: contain;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap:.5rem;
    padding: 1rem;
`
const Button = styled.button`
   border: none;
   outline: none;
   background: transparent;
   font-size: 1rem;
   background-color: #D9A800;
   color: white;
   font-weight: bold;
   text-transform: capitalize;
   padding:.5rem 1rem;
   border-radius:.5rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   &:disabled{
    cursor: not-allowed;
    background-color: #dedede;
   }

`
const Checkout = () => {
    const [paymentType,setPayment] = useState('card');
    const [index,setIndex] = useState(0);
    const [amount,setAmount] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const [address,setAddress] = useState(null);

    useEffect(()=>{
        location?.state && setAddress(location.state?.user)
        location?.state && setAmount(location.state?.amount)
    },[location])
    // const cartItems = useSelector(state => state.cart.cartItems);
    // const token = useSelector(state => state.user.token);
    // const cardPayment = async ()=>{
    //     try {
    //         const res = await postData('/pay/cardV2',{cart:cartItems},token);
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const cart = useSelector(state => state.cart)
    const pay = async ()=>{
        switch(paymentType){
            case 'paypal':
                console.log('paying with paypal');
              await  payWithPaypal();
                break;
            case 'mpesa':
                console.log('paying with mpesa');
            //   await  payWithPaypal();
                break;
            default:
                break;
        }
       
    }
    const payWithPaypal = async ()=>{
          try {
            const res = await postData('pay/paypalV2',{items:cart?.cartItems,total:cart?.total});
            if(res){
                window.location.href = res?.link
            }
            console.log(res);
        } catch (error) {
            console.log(error);
            
        }
    }
    const handleClick = (index,type)=>{
        setIndex(index);
        setPayment(type)
    }
    useEffect(()=>{
         document.querySelectorAll('.type').forEach((item,itemIndex) =>{
            if(item.classList.contains('active')){
                item.classList.remove('active')
            }
            if(index === itemIndex){
                
                item.classList.add('active')
            }
         })

    },[index])
  return (
    <Container>
        <TitleWrapper>
            <Title>Payment method</Title>
            <TitleDescription>Choose the best payment method</TitleDescription>
        </TitleWrapper>
        <PaymentMethodWrapper>
            <PaymentMethod>
                <RadioGroup className='wrapper' >
                    <InputWrapper className='type' onClick={e=> handleClick(0,'card')}>
                   <Image src={visa} alt='pay with credit card'  />
                    </InputWrapper>
                    <InputWrapper className='type' onClick={e=> handleClick(1,'paypal')}>
          <Image src={paypal} alt='pay with paypal'  />
                    </InputWrapper>
                    <InputWrapper className='type' onClick={e=> handleClick(2,'mpesa')} >
          <Image src={mpesa} alt='pay with mpesa'  />
                    </InputWrapper>
                </RadioGroup>
            </PaymentMethod>
            <PaymentMethodDescription>

            </PaymentMethodDescription>
        </PaymentMethodWrapper>
        <ButtonWrapper>
             <Button onClick={()=> navigate('/address')} > <KeyboardArrowLeft/> prev</Button>
             {paymentType  === 'card'?
             <PayWithCardButton amount ={amount} >
                 <Button>  pay with {paymentType} </Button>
             </PayWithCardButton>:
             <Button onClick={pay} >  pay with {paymentType} </Button>
             }
             </ButtonWrapper>
    </Container>
  )
}

export default Checkout;
// import React from 'react'
// import { useSelector } from 'react-redux';
// import { redirect, useNavigate } from 'react-router-dom'
// const Checkout = () => {

//   return (
//     <div>
//         <button onClick={pay} >pay</button>
//     </div>
//   )
// }

// export default Checkout
