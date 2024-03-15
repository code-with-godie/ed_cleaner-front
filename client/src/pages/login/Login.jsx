import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { fetchEnd, fetchStart, login } from '../../context/userSlice'
import { useNavigate } from 'react-router-dom'
import { postData } from '../../api/apiCalls'
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { openToast } from '../../context/appSlice'
const Wrapper = styled.section`
display: flex;
flex-direction: column;
gap: 1rem;
`
const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
`
const InputWrapper = styled.div`
display: flex;
border: 1px solid #bab9b9;

`
const Input = styled.input`
flex: 1;
background: transparent;
border: none;
font-size: 1.2rem;
color: white;
font-weight: 200;
padding:1rem;
outline: none;
::placeholder{
  text-transform: capitalize;
}
`
const ControlWrapper = styled.div`
display: flex;
margin-top: 40px;
`
const Control = styled.button`
flex: 1;
padding: 1rem;
border: none;
color: white;
font-weight: 400;
font-size: 1.2rem;
display: flex;
align-items: center;
justify-content: center;
gap:.5rem;
cursor: pointer;
text-transform: capitalize;
  background: #D9A800;
  :disabled{
    cursor: not-allowed;
    background-color: #bab9b9;
  }
`
const IconWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0  0.5rem 0 1rem ;
.icon{
  font-size:2rem;
  color: #D9A800;
}
.eye{
  cursor: pointer;
}
`
const Login = () => {
  const [user,setUser] = useState({email:'',password:''});
  const [show,setShow] = useState(false);
  const [disabled,setDisabled] = useState(false);
  const loggedInUser = useSelector(state=> state.user.currentUser);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({...prev,[name]:value}));
  }
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(fetchStart())
      const res = await postData('/users/auth/login',user);
      if(res){
        dispatch(login({token:res?.token,user:res?.user}))
      }
    } catch (error) {
      const messege = error?.response?.data?.message || 'Something went wrong'
      dispatch(openToast(messege))
      console.log(error);
    }
    finally{
      dispatch(fetchEnd());
    }
    // dispatch(login({user:{...user,id:1},token:Math.random()}))
  }
  
  useEffect(()=>{
    if(user.email.length < 7 || user.password.length < 6){
      setDisabled(true);
    }else{
      
      setDisabled(false);
    }
  },[user])

  useEffect(()=>{
    if(loggedInUser){
      navigate('/')
    }
  },[loggedInUser,navigate])
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} >
         <InputWrapper>
        <IconWrapper>
          <EmailIcon className='icon'  />
        </IconWrapper>
        <Input type='email' name='email' value={user.email} onChange={handleChange} placeholder={`email address*`} />
        </InputWrapper>
        <InputWrapper>
        <IconWrapper>
        <LockIcon className='icon'  />
        </IconWrapper>
        <Input type= {show ? 'text':'password'} name='password' value={user.password} onChange={handleChange} placeholder={`password* -minimum of 6 charactors`} />
        <IconWrapper>
          {
            !show ? 
            <IconButton onClick={()=> setShow(true)} >
              <VisibilityOffIcon className='icon eye' /> 
            </IconButton>:
            <IconButton onClick={()=> setShow(false)} >
              <VisibilityIcon className='icon eye'  />

            </IconButton>
          }
        </IconWrapper>
        </InputWrapper>
        <ControlWrapper>
            <Control disabled ={disabled} className='active' > {loading ? <LoadingAnimation/>: <>  <LoginIcon className='icon' /> LOGIN </> } </Control>
        </ControlWrapper>
      </Form>
    </Wrapper>
  )
}

export default Login