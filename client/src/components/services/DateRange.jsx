import React, { useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../api/useFetch';

const Container = styled.div`
flex: 1;
background-color: #ffffff;
padding:.5rem;
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
justify-content: center;
/* z-index: -1; */
.picker{
  z-index: 1000 !important;
}
`;
const Control = styled.div`
width: 100%;
padding: 1rem;
/* border-radius: 2rem; */
background-color: #D9A800;
text-transform: capitalize;
cursor: pointer;
text-align: center;
font-size: 1.5rem;
color: white;
/* max-width: 200px; */
/* animation: animate 500ms  ease-in-out 1000ms infinite alternate; */
:hover,
&.booked{
    animation-play-state: paused;
    color: white !important;
}
`
const DatePickerModel = ({amount,id}) => {
  // console.log(amount,'date range');
  const {data,loading,error} = useFetch('/bookings/booked');
  const [date,setDate] = useState(new Date());
    const[ disabledDates,setDisabledDates] =  useState([]);
  useEffect(()=>{
    if(data){
    let booked = data.bookings.map(item => new Date(item.date));
      setDisabledDates(booked)
      console.log(booked);
    }
    console.log(data);
  },[data])

  if(error){
    console.log(error);
  }

  // Function to check if a date is disabled
  const tileDisabled = ({ date }) => {
    // Check if the date is in the disabledDates array
    return disabledDates.some(disabledDate =>
      date.getFullYear() === disabledDate.getFullYear() &&
      date.getMonth() === disabledDate.getMonth() &&
      date.getDate() === disabledDate.getDate()
    );
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };
  const handleChange = (date) => {
   setDate(date);
  //  setShowPicker(true)
  };
  const navigate = useNavigate();
  return (
    <Container onClick={handleClick}>
      <Control> {moment(date).format('DD/MM/YYYY')} </Control>
    <Calendar minDate={new Date()} tileDisabled={tileDisabled} onClick={handleClick} onChange={handleChange} value={date} />
    <Control onClick={()=> navigate('/address',{state:{amount,id,date:moment(date).format('YYYY/MMM/DD')}})} >Book Now</Control>
    </Container>
  );
};

export default DatePickerModel;
