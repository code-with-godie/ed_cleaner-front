import React, {useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { getData, postData } from '../../api/apiCalls';

const Success = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/orders')
    },4000)
  },[navigate])
  return (
    <div>
      <h1>your order is been prepared</h1>
      <p>wait for a redirect</p>
    </div>
  )
}


export default Success