import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import about from '../../../assets/about2.jpg'
import description from '../../../assets/about.png'
import achieve from '../../../assets/achieve.png'
import { useNavigate } from 'react-router-dom'
const Wrapper = styled.section`
display: flex;
padding:.5rem 0;
justify-content: center;
align-items: center;
@media screen and (min-width: 768px) {
        height: 100vh;
    }
`
const Container = styled.div`
    display: flex;
    gap:.5rem;
    align-items: flex-start;
    width: 100%;
    max-width: 1024px;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

`
const ImageContainer = styled.div`
flex: 1;
position: relative;

`
const DescriptionContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap:2rem;
`
const Image = styled.img`
width: 100%;
height: auto;
max-height: 70vh;
object-fit: cover;
 @media screen and (min-width: 768px) {
        border-radius:1rem;
    }
`
const Achieve = styled(Image)`
    max-width: 150px;
`
const ImageOverlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
z-index: 10000;
background-color: #000000af;
top: 0;
border-radius: 1rem;
display: flex;
flex-direction: column;
gap:.5rem;
align-items: center;
justify-content: center;
`
const Count = styled.p`
font-weight: bold;
font-size: 4rem;
color: white;
`
const CountDescription = styled(Count)`
font-size: 2rem;
`
const Description = styled.p`
letter-spacing: 2px;
color: #000000e0;
`
const Quote = styled.div`
padding: 1rem 2rem;
border-radius: 2rem;
background-color: #D9A800;
text-transform: capitalize;
cursor: pointer;
align-self: flex-start;
`
const About = () => {
    const [count,setCount] = useState(0);
    const [intesecting,setIntesectig] = useState(false);
    const navigate = useNavigate()
    useEffect(()=>{
        if(intesecting){
              const id = setInterval(() => {
            setCount(prev => prev < 15 ? prev + 1:prev)
        }, 50);

        return()=>{
            clearInterval(id)
        }
        }else{
           setCount(0)

        }
    },[intesecting])

    const ref = useRef();
        const createObserver = () => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    console.log(entry.isIntersecting);
                  if(entry.isIntersecting){
                    setIntesectig(true)
                }else{
                    setIntesectig(false)
                  }
                });
            },
            { threshold: 0.70 }
        );
        return observer;
    };

    useEffect(() => {
        const observer = createObserver();
        if(ref){
          observer.observe(ref.current);
        }
    }, [ref]);
  return (
    <Wrapper>

    <Container ref={ref} >
        <ImageContainer  >
            <Image src={about} />
            <ImageOverlay>
                <Achieve src={achieve} />
                <Count> {count} </Count>
                <CountDescription>years of experience</CountDescription>
            </ImageOverlay>
        </ImageContainer>
        <DescriptionContainer>
            <Image src={description} />
            <Description>EdPest Cleaners is a reputable cleaning and fumigation company based in Kasarani, Nairobi. We provide top-notch services to ensure your home or business remains clean and pest-free.
Our team of experts is trained to handle all types of pest infestations and cleaning needs. We use safe and effective products to ensure our clients a clean and pest-free environment.
</Description>
            <Quote onClick={()=> navigate('/about')} >learn more</Quote>
        </DescriptionContainer>
    </Container>
    </Wrapper>
  )
}

export default About