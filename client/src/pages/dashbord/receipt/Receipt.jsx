import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getData } from '../../../api/apiCalls';
const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: beige;
`
const Iframe = styled.iframe``
const Receipt = () => {
    const location = useLocation();
    const [url,setUrl] = useState(null);
    useEffect(()=>{
        setUrl(location?.state?.url)
    },[location])
    console.log(url);
    useEffect(()=>{
        const getReceipt = ()=>{
            try {
                const res = getData(`/order/receipt?url=${url}`);
                console.log(res);
                
            } catch (error) {
                console.log(error);
            }

        }
        url && getReceipt();
    },[url])
  return (
    <Container>
        {
            url &&
        <Iframe src={url} title='receipt page' />
        }
    </Container>
  )
}

export default Receipt