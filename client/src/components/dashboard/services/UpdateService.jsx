
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Avatar, IconButton } from '@mui/material'
import logo from '../../../assets/logo.png'
import LoadingAnimation from '../../loading/LoadingAnimation';
import { Close } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'
import { postData, updateData } from '../../../api/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import {productFetchFailure, productFetchStart, productFetchSuccess } from '../../../context/productSlice';
import {openToast } from '../../../context/appSlice';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Container = styled.section`
width: 100%;
max-width: 600px;
min-height: 200px;
background-color: #28313c3c;
background: #2A3447;
position: relative;
padding:.5rem;
display: flex;
flex-direction: column;
gap: 1rem;
position: relative;
.logo{
  width: 100px;
  height: 100px;
  position: absolute;
  cursor: pointer;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}
.btn-close{
    position: absolute;
    top: 10px;
    right: 10px;
    .close{
        color: white;
        font-size: 2rem;
    }
}
`
const ControlWrapper = styled.div`
display: flex;
`
const Control = styled.button`
flex: 1;
padding: 1rem;
background: #475257;
border: none;
color: white;
font-weight: 400;
font-size: 1.2rem;
cursor: pointer;
text-transform: capitalize;
&.active{
  background: #53AD8A;
}
&:disabled{
  background: #676767;
  cursor: no-drop;
}
`
const Title = styled.h1`
    margin-top: 60px;
    text-transform: capitalize;
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 2rem;
    @media screen and (min-width:768px) {
        font-size: 3rem;
    }
`
const WrapperTwo = styled.section`
display: flex;
flex-direction: column;
gap: 1rem;
`
const Form = styled.form`
display: flex;
flex-direction: column;
gap: .5rem;
`
const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
@media screen and (min-width: 768px) {
  flex-direction: row;
}

`
const Input = styled.input`
border: 1px solid #bab9b9;
flex: 1;
background: transparent;
font-size: 1.2rem;
color: white;
font-weight: 200;
padding:1rem;
outline: none;
::placeholder{
  text-transform: capitalize;
}
`
const AddService= ({close,setProducts,service}) => {
  const user = useSelector(state => state.user.user);
  const token = useSelector(state => state.user.token);
  const [desc,setDescription] = useState('')
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const [disabled,setDisabled]  = useState(true);
  const [product,setProduct] = useState(service);

  useEffect(()=>{
     service && setProduct(service)
  },[service])

  const onChange = e =>{
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    setProduct(prev => ({...prev,[name]:value}))
  }
  const onSubmit = async e =>{
    e.preventDefault();
    try {
      setLoading(true);
      const res =  await updateData(`/services/${product._id}`,product,token)
      if(res){
          setProducts(prev => prev.map(item =>{
            if(item._id === res?.service._id){
              return res?.service;
            }else{
              return item
            }
          }))   
          close(false) 
      }
    } catch (error) {
      const messege = error?.response?.data?.messege || 'Something went wrong'   
      console.log(error);
       toast.error(messege,{
        position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
// transition: Bounce,
    }) 
    }
    finally{
      setLoading(false)
    }
  }
   const { getInputProps, getRootProps, acceptedFiles, isDragActive } =
        useDropzone({
            accept: { 'image/*': ['jpg', '.webp', 'png', 'jpeg','PNG'] },
            maxFiles: 1,
        });

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[acceptedFiles.length - 1];
            const type = file?.type.split('/')[0];
            if (type !== 'image') {
                return;
            }
            const fileReader = new FileReader();
            fileReader.readAsDataURL(acceptedFiles[acceptedFiles.length - 1]);
            fileReader.onload = () => {
                setProduct(prev => ({...prev,img:fileReader.result}))
            };
        }
    }, [acceptedFiles]);
    useEffect(()=>{
      if(product.img.length <= 0 || product.title.length <= 0  || product.price.length <=0 || !product.priceNumber ){
        setDisabled(true);
      }else{
        
        setDisabled(false);
      }
      console.log(product);
    },[product])
  return (
      <Container>
        <IconButton className='btn-close'  onClick={()=> close(false)} >
            <Close className= 'close' />
        </IconButton>
        <Avatar className='logo' alt='Ojay' src={product?.img || logo }  />
        <Title> Update Service </Title>
        <WrapperTwo>
      <Form onSubmit ={onSubmit} >
        <InputWrapper>
        <Control type='button' {...getRootProps({ hover: isDragActive })} >click to add image
         <input
                        {...getInputProps({
                            type: 'file',
                            hidden: true,
                        })}/>
        </Control>
        <Input name='title' onChange={onChange} value={product.title}  placeholder={`service title*`} />
        </InputWrapper>
        <InputWrapper>
        <Input name='priceNumber' type='number' step='0.5'  min={1} onChange={onChange} value={product.priceNumber}  placeholder={`Enter service price*`} />
        </InputWrapper>
           <InputWrapper>
        <Input name='price'onChange={onChange} value={product.price}   placeholder={` price description *`} />
        </InputWrapper>
           <InputWrapper>
        <Input name='description'  onChange={onChange} value={product.description}   placeholder={`Enter service description*`} />
        </InputWrapper>
        <ControlWrapper>
            <Control className='active' disabled = {disabled} > {loading ? <LoadingAnimation/>:' Update Service ' }</Control>
        </ControlWrapper>
      </Form>
    </WrapperTwo>
    <ToastContainer/>
      </Container>
  )
}

export default AddService