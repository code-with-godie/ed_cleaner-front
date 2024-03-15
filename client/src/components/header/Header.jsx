import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {FacebookRounded, Home, Instagram, LinkedIn, Logout, Person, Phone, SearchRounded, ShoppingCart, SmsOutlined, Twitter } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Badge, IconButton} from '@mui/material';
import LogoutModel from './LogoutModel';
import Model from '../../components/model/Model'
import { getCartTotal } from '../../context/cartSlice';
import { useFetch } from '../../api/useFetch';
const Wrapper = styled.div`
position: sticky;
top: 0;
*{
    border: none;
}
`
const Container = styled.nav`
display: none;
position: relative;
z-index: 1000000;
 @media screen and (min-width: 768px){
    display: block;
 }
`
const Top = styled.div`
display: flex;
background-color: #0A1026;
justify-content: center;
`
const TopWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
        font-size:1.5rem;
        cursor: pointer;
        color: #D9A800;
    }
`
const TopItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:.5rem;
`
const Control = styled.div`
    display: flex;
    align-items: center;
    gap:.5rem;
    padding:.5rem;
    &:first-child{
        border-right: 2px solid  #D9A800;
    }
`
const Label = styled.p`
    color: white;
`
const Bottom = styled.div`
display: flex;
padding:1rem .5rem;
background-color: white;
position: relative;
justify-content: center;
`
const BottomWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1300px;
    justify-content: space-between;
     position: relative;

`
const BottomWLeft = styled.div`
    display: flex;
    gap:.5rem;
    align-items: center;
`
const BottomRight = styled.div`
    gap:1rem;
     display: flex;
    gap:1.5rem;
    align-items: center;
    .link{
        color: #0A1026;
        text-transform: capitalize;
        font-weight: 500;
        font-size:1.2rem;
        text-decoration: none;
        display: flex;
        gap:.2rem;
        align-items: center;
        .icon{

        }
    }

`
const Quote = styled.div`
padding: 1rem 2rem;
border-radius: 2rem;
background-color: #D9A800;
text-transform: capitalize;
cursor: pointer;
&.small{
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem 2rem;
    color: white;
}
.badge{
    position: relative;
}
`
const Count = styled.p`
 background-color: white;
 color: #D9A800;
 position: absolute;
 top: -5px;
 font-weight: 500;
 border-radius:50%;
 padding:.3rem;
`
const Select = styled.select`
border: none;
width: auto !important;
padding:.5rem;
outline: none;
font-size: 1.2rem;
text-transform: capitalize;
color: #0A1026;
`
const Option = styled.option`
/* padding:.5rem; */
font-size: 1.2rem;
text-transform: capitalize;
`
const Header = () => {
    const {data,loading,error} = useFetch('/products/title');

    const [options,setOptions] = useState([]);
    const navigate = useNavigate();
    const user = useSelector(state => state?.user?.currentUser);
    const amount = useSelector(state => state?.cart.amount);
    const [logout,setLogout] = useState(false);
        const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCartTotal())
    },[cart,dispatch])
    useEffect(()=>{
  if(data){
    setOptions(data?.categories);
    console.log(data);
  }
},[data])
  return (
    <Wrapper>

    <Container>
        <Top>
            <TopWrapper>
                <TopItemWrapper>
                    <Control>
                        <SmsOutlined className='icon' />
                        <Label>ngugimaina@gmail.com</Label>
                    </Control>
                    <Control>
                        <Phone className='icon' />
                        <Label>+254 722768448</Label>
                    </Control>
                </TopItemWrapper>
                <TopItemWrapper>
                    <FacebookRounded className='icon' />
                    <Instagram className='icon' />
                    <Twitter className='icon' />
                    <LinkedIn className='icon' />
                </TopItemWrapper>
            </TopWrapper>
        </Top>
        <Bottom>
            <BottomWrapper>
                <BottomRight>
                    <Link className='link' to='/' > <Home/> home</Link>
                    <Link className='link' to='/about' > <Person/> about</Link>
                    <Link className='link' to='/services' > <SearchRounded/> service</Link>
                    <Link className='link' >
                      { !loading &&  <Select onChange={(e)=> navigate('/products',{state:{slug:e.target.value}})} >
                        <Option value='all' onClick={(e)=> navigate('/products',{state:{slug:'all'}})}  > All </Option>
                            {
                                options?.map(item => <Option value={item} key={item} > {item} </Option>)
                            }
                            
                        </Select>}
         </Link>
                    <Link className='link' to='/contacts' > <Phone/> contact</Link>
                </BottomRight>
                <BottomWLeft>
                      {
                          user?.role === 'admin' &&
                          <Quote className='small' onClick={()=> navigate('/dashboard')} >dashboard</Quote>
                        }
                    {
                        user ? <>
                        <Quote className='small'  onClick={()=> navigate('/cart')} > <Badge className='badge' badgeContent ={<Count>{amount} </Count>} > <ShoppingCart/> </Badge> cart </Quote>
                        <Quote className='small' onClick={()=> setLogout(true) } > <Logout/> logout</Quote>
                        <IconButton>
                            <Avatar/>
                        </IconButton>
                        </>:
                        <>
                        <Quote onClick={()=> navigate('/auth/login')} >login</Quote>
                        <Quote onClick={()=> navigate('/auth/register')} >register</Quote>
                        </>
                    }
                </BottomWLeft>
            </BottomWrapper>
                    {/* <DropDown/> */}
        </Bottom>
        {
            logout &&
            <Model center bg=' #000000ce' close={setLogout} >
            <LogoutModel setLogout = {setLogout} />
        </Model>
        }
    </Container>
            </Wrapper>
  )
}

export default Header