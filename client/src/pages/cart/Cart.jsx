import React from 'react';
import styled from 'styled-components';
// import Header from '../../components/header/Header';
// import Tobnav from '../../components/nav/Tobnav';
import prime from '../../assets/slide-1.gif';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import AnotherList from '../../components/home/AnotherList';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
const Wrapper = styled.section`
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    /* overflow: auto; */
    gap: 0.5rem;
    @media screen and (min-width: 900px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const ParentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 2.5;
`;
const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 0.5rem;
    background-color: white;
    flex: 1;
`;
const EmptyCartTitle = styled.h1`
    padding: 0.5rem;
    text-transform: capitalize;
    color: #000000cb;
`;
const EmptyCartDescription = styled.p`
    font-size: 1rem;
`;
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
`;
const ImageContainer = styled.div`
    padding: 0.5rem;
    background-color: white;
    border-radius: 1rem;
    border: 1px solid #bebebe;
`;
const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
`;

const CartTotalWrapper = styled(ImageContainer)`
    border: none;
    border-radius: 0;
    flex: 1;
`;
const Important = styled.p`
    font-size: 1rem;
    font-weight: 100;
    color: #978dd9;
    display: inline;
    padding-bottom: 2rem;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;
const ItemControllerContainer = styled.div`
    border-bottom: 1px solid #cecece;
    display: flex;
    gap: 1rem;
`;
const ItemController = styled.p`
    padding: 0.3rem;
`;

const CartContainer = styled(EmptyCartContainer)``;
const CartHeader = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 0.3rem; */
    border-bottom: 1px solid #cecece;
    padding: 0.5rem;
`;
const CartTitle = styled(EmptyCartTitle)``;
const CartDescription = styled.p`
    color: #1db2e0;
    font-size: 0.9rem;
    cursor: pointer;
`;
const Cart = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };
    const cart = useSelector(state => state.cart);
    const userID = useSelector(state => state.user.currentUser?._id);
    return (
        <Wrapper>
            <Container>
                <ParentWrapper>
                    {cart.cartItems.length === 0 ? (
                        <EmptyCartContainer>
                            <EmptyCartTitle>
                                your cart is empty.
                            </EmptyCartTitle>
                            <EmptyCartDescription>
                                your shopping cart lives to serve.Give it
                                purpose- fillit with
                                groceries,clothing,household supplies
                                electronics and more.continue shopping on the{' '}
                                <Important onClick={goToHome}>
                                    Ed_cleaners products
                                </Important>
                                , learn about
                                <Important> todays deals </Important>, or visit
                                your
                                <Important> wish List</Important>
                            </EmptyCartDescription>
                        </EmptyCartContainer>
                    ) : (
                        <CartContainer>
                            <CartHeader>
                                <CartTitle>shopping cart</CartTitle>
                            </CartHeader>
                            {cart.cartItems?.filter(item => item.userID === userID).map(item => (
                                <CartItem
                                    key={item._id}
                                    {...item}
                                />
                            ))}
                        </CartContainer>
                    )}
                    {/* <EmptyCartContainer>
                        <EmptyCartTitle>your items</EmptyCartTitle>
                        <ItemControllerContainer>
                            <ItemController>
                                no items saved for later
                            </ItemController>
                            <ItemController>buy it again</ItemController>
                        </ItemControllerContainer>
                    </EmptyCartContainer> */}
                    <EmptyCartDescription>
                        The price and availability of items at Ed_cleaners are
                        subject to change . The cart is a temporary place to
                        store a lists of your items and reflects each items most
                        recenent price. <Important>learn more</Important>. do
                        you have a gift card or promotional code? well ask you
                        to enter your calm code when its time to pay
                    </EmptyCartDescription>
                </ParentWrapper>
                <LeftContainer>
                    {cart.cartItems.length !== 0 && (
                        <CartTotalWrapper>
                            <CartTotal />
                        </CartTotalWrapper>
                    )}
                    <ImageContainer>
                        <Image src={prime} />
                    </ImageContainer>
                </LeftContainer>
            </Container>
        </Wrapper>
    );
};

export default Cart;
