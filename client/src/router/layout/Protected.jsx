import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import {useSelector } from 'react-redux'
const Container = styled.main`
    height: 100vh;
`;
const Protected = () => {
    const  user  = useSelector(state => state.user.currentUser);

    return <Container>{user ? <Outlet /> : <Navigate to='/auth/login' />}</Container>;
};

export default Protected;
