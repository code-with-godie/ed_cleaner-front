import React, { useEffect, useState } from 'react'
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import styled from 'styled-components'
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { Avatar } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import moment from 'moment'
import "../../components/dashboard/dataTable/dataTable.scss";
import { useSelector } from 'react-redux';

const Wraper = styled.div`
min-height: 500px;
padding:.5rem;
overflow: auto;
display: flex;
justify-content: center;
.link{
  text-decoration: none;
  color: white;
  font-size: .8rem;
  background-color: #434848;
  padding:.5rem;
  border-radius:.5rem;
  text-transform: capitalize;
}
.link:hover{
  text-decoration: underline;
}
button{
  padding:.5rem;
  border: none;
  border-radius:.5rem;
  &.success{
    background-color: #6cee6c;
    color: #ffffff;
  }
}
  .btn{
    background-color: red;
    padding:.5rem 1rem;
    text-transform: capitalize;
    border: none;
    &.pending{
      background-color: tomato;
    }
    &.completed{
      background-color: lightgreen;
    }
    &:disabled{
      background-color: gray;
      cursor: not-allowed;
    }
  }
  
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
max-width: 1200px;
.data{
  width: 100%;
}
.grid{
  * {
    flex: 1;
  }
}
`
const Bookings = () => {
  const {currentUser:user} = useSelector(state => state.user)
  const location = useLocation();
  const showAll = location?.pathname.startsWith('/dashboard/bookings') && user?.role === 'admin' ? 'admin' :'normal'
  const {data,loading,error} = useFetch(`/bookings`);
  const [myRows,setRows] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    if(data){
      console.log(data,'data');
      const newData = data?.bookings.map(item => {
        const {user:{firstName,lastName,profilePic} ,service:{img, priceNumber,title} ,amount,address,paymentType,_id,createdAt,receipt_url,status} = item;
        return ({firstName,lastName,img,price:priceNumber,title,amount,address,paymentType,_id,date:createdAt,receipt_url,status})
      })
      setRows(newData)
    }
  },[data])
//   const rows = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//   { id: 3, col1: 'MUI', col2: 'is Amazing' },
// ];
const columns = [
  { field: 'img', headerName: 'service',flex:0.7 ,renderCell:params =><Avatar src={params.row.img} /> },
  { field: 'title', headerName: 'service title' ,flex:0.8  },
  { field: 'firstName', headerName: 'first Name' ,flex:1.7   },
  { field: 'lastName', headerName: 'last Name' ,flex:1.7   },
  { field: 'address', headerName: 'Address' ,flex:1.5   },
  { field: 'amount', headerName: 'Amount' ,flex:.8   },
  { field: 'date', headerName: 'Date' ,flex:4 ,renderCell:params =>{
    const formattedDate = moment(params.row.date).format('dddd-MM-Do-YYYY h:mm:ss A');
    return <p> {formattedDate} </p>
  }   },
  // { field: 'date', headerName: 'Date' ,flex:3 ,renderCell:params =><p className='success' > {`${dayjs(params.row.date)?.$D}/ ${dayjs(params.row.date)?.$M}/${dayjs(params.row.date)?.$y} : ${dayjs(params.row.date)?.$H}: ${dayjs(params.row.date)?.$m}` } </p>   },
  // { field: 'type', headerName: 'payment Type' ,flex:1.5,renderCell:params =><button onClick={()=> navigate('/receipt',{state:{url:params.row.receipt_url}})} className='link' > {params.row.type} </button>  },
 { field: 'status', headerName: 'Status' ,flex:2.5 ,renderCell:params =>{
    // console.log(params.row);
    return <button className={`${params.row.status === 'pending'? 'pending btn':'completed btn'}`} > {params.row.status} </button>  
  } },
];
// console.log(dayjs(new Date()));
if (loading) {
  return <Wraper>
    <Container>
      <LoadingAnimation large />
    </Container>
  </Wraper>
}
if (error) {
  console.log(error);
  return <Wraper>
    <Container>
      <h1>something went wrong!!!!</h1>
    </Container>
  </Wraper>
}
  return (
    <Wraper>
      <Container>
        <div className="dataTable data ">

        <DataGrid 
        cancel
        className='dataGrid'
           initialState={{
             pagination: {
               paginationModel: {
                 pageSize: 10,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            pageSizeOptions={[25]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
            rowHeight={70} 
            getRowId={row => row._id} 
            rows={myRows}
            columns={columns} />
            </div>
      </Container>
    </Wraper>
  )
}

export default Bookings