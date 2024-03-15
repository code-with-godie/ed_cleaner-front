import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeToast } from '../../context/appSlice';

const Wrapper = styled.div`
    padding: 0.5rem;
    width: 100%;
    position: absolute;
    top: 1.5rem;
    display: flex;
    justify-content: center;
    z-index: 1000000000000000000000000000;
`;
const Container = styled.p`
    padding: 0.5rem;
    width: 90%;
    max-width: 400px;
    text-align: center;
    border-radius: 0.3rem;
    background: #D9A800;
    color: #000000da;
    font-family: 'Poppins', sans-serif;
`;
const Toast = () => {
    const dispatch = useDispatch();
    const messege = useSelector(state => state.app.toastMessage);
    useEffect(() => {
        setTimeout( ()=> dispatch(closeToast()) , 2000);
    }, [dispatch]);
    return ReactDom.createPortal(
        <Wrapper>
            <Container> {messege}</Container>
        </Wrapper>,
        document.getElementById('model')
    );
};

export default Toast;
