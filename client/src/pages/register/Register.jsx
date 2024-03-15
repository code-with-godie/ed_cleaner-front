import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { postData } from '../../api/apiCalls';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnd, fetchStart } from '../../context/userSlice';
import LoadingAnimation from '../../components/loading/LoadingAnimation'
import { openToast } from '../../context/appSlice';
const Wrapper = styled.section`
display: flex;
flex-direction: column;
gap: 1rem;
`
const Form = styled.form`
display: flex;
flex-direction: column;
gap: .5rem;
`
const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
@media screen and (min-width: 768px) {
  flex-direction: row;
}

`
const Input = styled.input`
border: 1px solid #bab9b9;
flex: 1;
background: transparent;
font-size: 1.2rem;
color: white;
font-weight: 200;
padding:1rem;
outline: none;
::placeholder{
  text-transform: capitalize;
  font-size: 1rem;
}
:focus{
  background: transparent;
}
`
const ControlWrapper = styled.div`
display: flex;
`
const Control = styled.button`
flex: 1;
padding: 1rem;
border: none;
color: white;
font-weight: 400;
font-size: 1.2rem;
cursor: pointer;
text-transform: capitalize;
  background: #D9A800;
  :disabled{
    cursor: not-allowed;
    background-color: #bab9b9;
  }
`
const Register = () => {
    const [user,setUser] = useState({firstName:'',lastName:'', email:'',password:'',confirmPassword:'',phone:''});
     const [disabled,setDisabled] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const loading = useSelector(state => state.user.loading);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({...prev,[name]:value}));
  }
  const handleSubmit = async e => {
       e.preventDefault();
    try {
      dispatch(fetchStart())
      const res = await postData('/users/auth/register',user);
      if(res){
        setUser({firstName:'',lastName:'', email:'',password:'',confirmPassword:'',phone:''});
        navigate('/auth/login')
      }
    } catch (error) {
      const messege = error?.response?.data?.message || 'Something went wrong'
      console.log(error);
      dispatch(openToast(messege));
    }
    finally{
      dispatch(fetchEnd())
    }
  }
   useEffect(()=>{
    if(user.email.length < 7 ||user.firstName.length < 3  ||user.lastName < 3 ||user.phone.length < 10 || user.password.length < 6 || user.password !== user.confirmPassword){
      setDisabled(true);
    }else{
      
      setDisabled(false);
    }
  },[user])
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
        <InputWrapper>
        <Input name='firstName' onChange={handleChange} value={user.firstName} placeholder={`first name*`} />
        <Input name='lastName' onChange={handleChange} value={user.lastName} placeholder={`last name*`} />
        </InputWrapper>
        <InputWrapper>
        <Input name='email' onChange={handleChange} value={user.email} placeholder={`email address*`} />
        </InputWrapper>
        <InputWrapper>
        <Input name='phone' onChange={handleChange} value={user.phone} placeholder={`phone number*`} type='number' />
        </InputWrapper>
           <InputWrapper>
        <Input name='password' type='password' onChange={handleChange} value={user.password} placeholder={`password (minimum 6 characters) *`} />
        <Input name='confirmPassword' type='password' onChange={handleChange} value={user.confirmPassword} placeholder={`confirm password (minimum 6 characters) *`} />
        </InputWrapper>
        <ControlWrapper>
            <Control className='active' disabled = {disabled} > {loading ? <LoadingAnimation/>:'REGISTER'} </Control>
        </ControlWrapper>
      </Form>
    </Wrapper>
  )
}


export default Register