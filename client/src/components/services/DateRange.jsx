import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
background-color: white;
padding:.5rem;
`;

const DatePickerModel = ({setDate,setShowPicker}) => {
  const blackList = ["2024-02-01", "2024-02-08", "2024-02-13", "2024-02-22"];

  const disableDate = (date) => {
    return blackList.some((item) => item === date.toISOString().split('T')[0]);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };
  const handleChange = (date) => {
   setDate(date);
   setShowPicker(true)
  };

  return (
    <Container onClick={handleClick}>
      <DatePicker
        label="Choose a date"
        shouldDisableDate={disableDate}
        onChange={date => handleChange(date)}
  
        // renderInput={(params) => <TextField {...params} />}
      />
    </Container>
  );
};

export default DatePickerModel;
