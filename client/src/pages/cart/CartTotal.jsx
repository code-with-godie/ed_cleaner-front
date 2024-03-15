import { Checkbox } from '@mui/material';
import React  from 'react';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
const Title = styled.p`
    font-weight: 500;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: #000000de;
`;
const Total = styled(Title)`
    font-weight: bold;
    display: inline;
`;
const Description = styled.p`
    font-weight: 100;
    font-size: 1rem;
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    font-weight: 500;
    background: #ffd814;
    cursor: pointer;
`;
const CartTotal = () => {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const gotoCheckout = () => navigate('/address');

    // useEffect(()=>{
    //     dispatch(getCartTotal());
    //     console.log('cart changed',cart);
    // },[cart,dispatch])
    return (
        <Container>
            <Title>
                subtotal ({cart?.amount} items):
                <Total>${cart?.total} </Total>{' '}
            </Title>
            <Bottom>
                <Checkbox size='small' />
                <Description>This order contains a gift</Description>{' '}
            </Bottom>
            <Button onClick={gotoCheckout}>Proceed to checkout</Button>
        </Container>
    );
};

export default CartTotal;
