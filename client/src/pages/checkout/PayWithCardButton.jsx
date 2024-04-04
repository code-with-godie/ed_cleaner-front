import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { postData } from '../../api/apiCalls'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../context/cartSlice'
import logo from '../../assets/logo2.png'
// import styled from 'styled-components';
// const Image = styled.img`
//   max-height: 50px;
//   width: auto;
//   object-fit: contain;
// `
const PayWithCardButton = ({children,amount,service,region,city,phone,serviceID,date,billingAddress, shippingAddress}) => {
  console.log(amount,'amount');
    const dispatch  = useDispatch();
    const [stripeToken,setStripeToken] = useState(null);
    // console.log(newAmount,'card payment');
    const navigate = useNavigate();
    const {currentUser:user} = useSelector(state => state.user)
    const {total:cartTotal,cartItems:items} = useSelector(state => state.cart);
    // const [amount,setAmount] = useState( ()=> service ? newAmount:cartTotal)
    const {token} = useSelector(state => state.user);
    const KEY ="pk_test_51OtYLvFx9vYQMEDvPpfJWH39ud5nQll9bteo65rVixIf6yumO2A0zQSjrCH0hDTFMBfzTM8iNb280N92xA50VV0W00sGXbuES3"
    const onToken = (token)=>{
      console.log(token);
        setStripeToken(token);
    }
    const ItemIDs = items?.map(item => item._id);
    useEffect(()=>{
      const makePayment = async ()=>{
        const res =  await postData('/pay/card',{tokenId:stripeToken.id,amount:service ? amount :cartTotal,email:user.email,type:service ?"service":'product'});
        let newRes = null
         if(res){
          const {receipt_url,amount,source:{address_city,address_country,address_line1}} = res?.payment
          if(service){
            const  data = {amount,address:`${city},${region},kenya,`,phone,paymentType:'card',receipt_url,user:user._id,service:serviceID,date}
            console.log(data,'data');
            newRes = await postData('/bookings',data,token);
            console.log(newRes);
            navigate('/bookings',{state:{bookings:true}});
          }else{
            const order = {amount,address:`${address_city},${address_country},`,phone:address_line1,paymentType:'card',orderItems:ItemIDs,receipt_url}
            newRes = await postData('/order',order,token);
            dispatch(clearCart())
            navigate('/success');
          }
                    // console.log('saving order',order);
            }
      }
        try {
          stripeToken && makePayment();
        
      } catch (error) {
        console.log(error);
      }
    },[stripeToken,navigate,cartTotal,ItemIDs,token,dispatch])
  return (
    <>
    {
      stripeToken ? <h1>processing...</h1>:
         <StripeCheckout
    name='ed_cleaners'
    image= {logo}
    email={user.email}
    billingAddress={billingAddress} // Disable billing address form
    shippingAddress={ shippingAddress} 
    description={` ${service ? `pay KShs. ${amount} for a service`:`Yout toatl is Ksh. ${cartTotal}`}`}
    amount={ service ? amount : cartTotal}
    token={onToken}
    stripeKey={KEY}
    > {children} </StripeCheckout>
    }
    </>
  )
}

export default PayWithCardButton