import { Checkbox } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import product5 from '../../assets/posts/8.jpg';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../../context/cartSlice';
const Container = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #cecece;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const Left = styled.div`
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;
const Image = styled.img`
    max-width: 200px;
    height: auto;
    object-fit: contain;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
const Description = styled.p``;
const InStock = styled.p`
    text-transform: capitalize;
    color: #07ab07;
    font-size: 0.8rem;
    font-weight: 500;
`;
const StyleWrapper = styled.div`
    display: flex;
    gap: 0.2rem;
    align-items: center;
`;
const StyleTitle = styled.p`
    text-transform: capitalize;
    font-weight: bold;
`;
const Style = styled.p`
    text-transform: capitalize;
    font-size: 0.9rem;
`;
const ControlContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
const QuantityWrapper = styled(StyleWrapper)``;
const Quantity = styled.button`
    padding: 0.3rem 0.5rem;
    border-radius: 0.7rem;
    background-color: #f0f2f2;
    border: 1px solid #d1d1d1;
    outline: none;
    font-size: 0.9rem;
    box-shadow: 0 0 3px 3px #eaeaeac9;
    font-weight: ${props => props.big && 'bold'};
    cursor: ${props => props.big && 'pointer'};
    color: ${props => props.big && '#000000da'};
    :disabled {
        color: #ffffff;
        cursor: not-allowed;
    }
`;
const Control = styled.p``;
const CartItem = ({ productImage, description, quantity, _id,price }) => {
    const dispatch = useDispatch();
    const increaseQuantity = id => {
        dispatch(increase(id));
    };
    const descreseQuantity = id => {
        dispatch(decrease(id));
    };
    const clearCart = id => {};
    const removeItem = id => {};
    return (
        <Container>
            <Left>
                <Checkbox defaultChecked />
                <Image
                    src={productImage?.url}
                    alt='product image'
                />
            </Left>
            <Right>
                <DescriptionContainer>
                    <Description>{description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam placeat alias nemo corporis pariatur quibusdam perferendis modi, expedita officia laborum repudiandae, beatae aliquam iure magni. Quisquam omnis dignissimos fugiat!' }</Description>
                    <InStock>in stock</InStock>
                    <StyleWrapper>
                        <StyleTitle>style:</StyleTitle>
                        <Style>device </Style>
                    </StyleWrapper>
                    <ControlContainer>
                        <QuantityWrapper>
                            <Quantity
                                big
                                // disabled={quantity === 1}
                                onClick={() => descreseQuantity(_id)}
                            >
                                {' '}
                                -
                            </Quantity>
                            <Quantity> Qty: {quantity  } </Quantity>
                            <Quantity
                                big
                                onClick={() => increaseQuantity(_id)}
                            >
                                {' '}
                                +{' '}
                            </Quantity>
                        </QuantityWrapper>
                    </ControlContainer>
                     <PriceContainer>
                    <StyleTitle>Price: {price}  Kshs. </StyleTitle>
                </PriceContainer>
                </DescriptionContainer>
            </Right>
        </Container>
    );
};

export default CartItem;
