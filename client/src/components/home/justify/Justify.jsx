import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import justify from '../../../assets/experience.jpg'
import description from '../../../assets/about.png'
const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding:1rem 0;
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
    order: column-reverse;
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
gap:1rem;
`
const Image = styled.img`
width: 100%;
height: auto;
max-height: 70vh;
object-fit: cover;
@media screen and (min-width: 768px){
       border-radius:1rem;

     }
`
const Description = styled.p`
letter-spacing: 2px;
color: #000000e0;
`

const CustomersContainer = styled.div`
  padding:.5rem 0;
  display: flex;
  gap:.5rem;
  justify-content: space-between;
  align-items: center;
`
const Item = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
align-items: center;
`
const ItemTitle = styled.h3`
font-size: 2rem;
font-weight: 500;
color: #32A643;

`
const ItemDescription = styled.p`
font-size:1.2rem;
`
const Header = styled.h2`
text-transform: capitalize;
color: #66BD73;
font-family: Georgia, 'Times New Roman', Times, serif;
`
const Title = styled.h1`
text-transform: capitalize;
font-size: 2.5rem;
font-weight: bolder;
color: #000000db;
`
const Justify = () => {
  const [employees,setEmployees] = useState(2)
  const [happy,setHappy] = useState(50)
  const [projects,setProjects] = useState(200)
  const [intesecting,setIntesectig] = useState(false);


    useEffect(()=>{
        if(intesecting){
              const id = setInterval(() => {
            setEmployees(prev => prev < 250 ? prev + 1:prev)
            setHappy(prev => prev < 1050 ? prev + 1:prev)
            setProjects(prev => prev < 2500 ? prev + 1:prev)
        }, 2);

        return()=>{
            clearInterval(id)
        }
        }else{
           setEmployees(2)
            setHappy(50)
            setProjects(2000)

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
        <DescriptionContainer>
            <Header>why choose us</Header>
            <Title>15 years experience in the cleaning industry</Title>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae optio quidem ex id voluptatibus officiis eos itaque veniam ipsam! Officia quam cupiditate ex consectetur facere. Nesciunt neque minima debitis est.</Description>
            <CustomersContainer>
              <Item>
                <ItemTitle> {employees}</ItemTitle>
                <ItemDescription>our cleaners</ItemDescription>
              </Item>
              <Item>
                <ItemTitle> {happy} </ItemTitle>
                <ItemDescription>happy clients</ItemDescription>
              </Item>
              <Item>
                <ItemTitle> {projects} </ItemTitle>
                <ItemDescription>project done</ItemDescription>
              </Item>
            </CustomersContainer>
        </DescriptionContainer>
          <ImageContainer  >
            <Image src={justify} />
        </ImageContainer>
    </Container>
    </Wrapper>
  )
}


export default Justify