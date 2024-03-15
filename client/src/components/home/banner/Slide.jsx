import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background: #000000a9 url(${props => props.url}) no-repeat center;
    background-size: cover;
    background-blend-mode: darken;
    display: flex;
    align-items: center;
    justify-content: center;
    /* &.gif{
       background: url(${props => props.url}) no-repeat top center;
    background-size: cover; 
    } */




`;
const Overlay = styled.div`
padding: 0.5rem;
width: 100%;
max-width: 700px;
display: flex;
flex-direction: column;
gap: 1rem;
`
const Title = styled.h3`
text-transform: uppercase;
color: #FFC600;
font-size: 1.5rem;
`
const Description = styled.h2`
text-transform: capitalize;
font-size: 4rem;
color: white;
font-weight: bolder;
`
const Quote = styled.div`
padding: 1rem 2rem;
border-radius: 2rem;
background-color: #D9A800;
text-transform: capitalize;
cursor: pointer;
align-self: flex-start;
`
const Slide = ({ url,title,description,gif }) => {
    return (

        <Container
            url={url}
            className={gif && 'gif'}
            >
            <Overlay>
                <Title> {title} </Title>
                <Description> {description} </Description>
                <Quote>get a quote</Quote>
            </Overlay>
        </Container>
    );
};

export default Slide;
