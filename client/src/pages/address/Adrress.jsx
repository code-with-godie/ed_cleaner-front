import React, { useEffect, useState }  from 'react'
import styled from 'styled-components';
import {  TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useSelector } from 'react-redux';
// import ContinueControls from './ContinueControls';
const Container = styled.div`
    padding:.5rem;
    max-width: 900px;
    margin:0 auto ;
    input{
        border-color: #D9A800 ;
        color: #000000de;         
    }
`
const Title = styled.p`
    padding: 1rem;
    border-bottom: 1px solid #b8b7b7;
    text-transform: uppercase;
    font-size:1.2rem;
    color: #D9A800;
`
const Form = styled.form`
padding: 0.5rem;
    /* border-bottom: 1px solid #b8b7b7; */


`

const InputWrapper = styled.div`
padding:.5rem;
display: flex;
gap:.5rem;
justify-content: space-around;
&:first-child{
    *{
        flex: 1;
    }
}
&:nth-child(3),
&:nth-child(4){
    *{
        flex: 1;
    }
}
`
const PhoneWrapper = styled.div`
flex: 1;
display: flex;
align-items: center;
padding:.5rem;
gap:.5rem;
input{
    flex: 1;
}
.big{
  flex: 1;
}
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
const PhonePrefixContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const PhoneLabel = styled.p`
color: #D9A800;
`
const Adrress = ({payment,setPayment}) => {
  const navigate = useNavigate();
  const loggedInUser = useSelector(state => state.user.currentUser)
  const [disabled,setDisabled] = useState(true);
  const [user,setUser ] = useState({firstName:loggedInUser?.firstName,lastName:loggedInUser?.lastName,phone:loggedInUser?.phone,addPhone:null,city:'',region:''})
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({...prev,[name]:value}))
  }

  useEffect(()=>{
    if(user.firstName && user.lastName && user.city && user.phone && user.region){
      setDisabled(false);
    }else{
      
      setDisabled(true);
    }
  },[user])

  return (
    <Container>
        <Title>User Address</Title>
        <Form>
            <InputWrapper>
            <TextField
            label = 'first name'
            value={user?.firstName}
            onChange={handleChange}
            helperText="Enter your first name"
            id='firstName'
            name='firstName'
            />
            <TextField
            helperText="Enter your last name"
            value={user.lastName}
            onChange={handleChange}
            id='lastName'
            name='lastName'
            label = 'last name'
             />
            </InputWrapper>
            <InputWrapper>
            <PhoneWrapper>
                 <PhonePrefixContainer>
                <PhoneLabel>Prefix</PhoneLabel>
                <PhoneLabel>+254</PhoneLabel>
            </PhonePrefixContainer>
            <TextField
            label = 'phone number'
            type='number'
            name='phone'
            className='big'
            value={user.phone}
             disabled = {user.phone?.length >=9}
            onChange={handleChange}
             />
            </PhoneWrapper>
             <PhoneWrapper>
             <PhonePrefixContainer>
                <PhoneLabel>Prefix</PhoneLabel>
                <PhoneLabel>+254</PhoneLabel>
            </PhonePrefixContainer>
            <TextField
            label = 'additonal phone number'
              type='number'
            name='addPhone'
            className='big'
            disabled = {user.addPhone?.length >=9}
            value={user.addPhone}
            onChange={handleChange}
             />

             </PhoneWrapper>
            </InputWrapper>
             <InputWrapper>
               <TextField
          id="region"
          name='region'
          label="e.g central"
           value={user.region}
          onChange={handleChange}
          helperText="Enter your current region"
        />
            <TextField
          id="city"
          name='city'
          label="e.g Nairobi"
           value={user.city}
          onChange={handleChange}
          helperText="Enter your current city"
        />
             </InputWrapper>
        </Form>
          <ButtonWrapper>
             <Button onClick={()=> navigate('/cart')} > <KeyboardArrowLeft/> prev</Button>
             <Button disabled ={disabled} onClick={()=> navigate("/checkout",{state:user})} >  next <KeyboardArrowRight/> </Button>
             </ButtonWrapper>
        {/* <ContinueControls payment={payment} setPayment = {setPayment}  /> */}
    </Container>
  )
}

export default Adrress