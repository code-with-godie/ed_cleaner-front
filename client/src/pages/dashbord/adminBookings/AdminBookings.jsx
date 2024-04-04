import { useEffect, useState } from "react";
import "./products.scss";
import DataTable from "../../../components/dashboard/dataTable/DataTable";
// import { products } from "../../../data/data";
import AddProduct from "../../../components/dashboard/services/AddService";
import Model from '../../../components/model/Model'
import { useFetch } from '../../../api/useFetch'
import LoadingAnimation from "../../../components/loading/LoadingAnimation";
import UpdateService from '../../../components/dashboard/services/UpdateService'
import RemoveProduct from "../../../components/dashboard/product/RemoveProduct";
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment'
import 'react-toastify/dist/ReactToastify.css';
import { deleteData, updateData } from "../../../api/apiCalls";
import { Avatar } from "@mui/material";
const columns = [
  { field: 'img', headerName: 'service',flex:0.7 ,renderCell:params =><Avatar src={params.row.img} /> },
  { field: 'title', headerName: 'service title' ,flex:4  },
  { field: 'name', headerName: 'customer' ,flex:1.8, renderCell:params =><p> {params.row.firstName} {params.row.lastName} </p>  },
  { field: 'address', headerName: 'Address' ,flex:3.2  },
  { field: 'amount', headerName: 'Price' ,flex:.8   },
  { field: 'date', headerName: 'Date' ,flex:2 ,renderCell:params =>{
    const formattedDate = moment(params.row.date).format('DD/MM/YY');
    return <p> {formattedDate} </p>
  }   },
  // { field: 'date', headerName: 'Date' ,flex:3 ,renderCell:params =><p className='success' > {`${dayjs(params.row.date)?.$D}/ ${dayjs(params.row.date)?.$M}/${dayjs(params.row.date)?.$y} : ${dayjs(params.row.date)?.$H}: ${dayjs(params.row.date)?.$m}` } </p>   },
  // { field: 'type', headerName: 'payment Type' ,flex:1.5,renderCell:params =><button onClick={()=> navigate('/receipt',{state:{url:params.row.receipt_url}})} className='link' > {params.row.type} </button>  },
  { field: 'status', headerName: 'Status' ,flex:2.5 ,renderCell:params =>{
    // console.log(params.row);
    return <button className={`${params.row.status === 'pending'? 'pending btn':'completed btn'}`} > {params.row.status} </button>  
  } },
];
const AdminBookings = () => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [products,setProducts] = useState([])
  const [product,setProduct] = useState({})
  const {loading,error,data} = useFetch('/bookings');

   const handleDelete = async (id) => {
    try {
      const res = await deleteData(`/services/${id}`);
      if(res){
        setProducts(prev => prev.filter(item => item._id !== id))
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
  };
   const handleComplete = async (id) => {
    try {
      const res = await updateData(`/bookings/${id}`,{status:'completed'});
      console.log(res,'updating..');
      if(res){
        setProducts(prev => prev.map(item => {
          if(item._id === res.booking._id){
            const {user:{firstName,lastName} ,service:{img, priceNumber,title} ,amount,address,paymentType,_id,createdAt,receipt_url,status} = res.booking;
            return {firstName,lastName,img,priceNumber,title,amount,address,paymentType,_id,createdAt,receipt_url,status};
          }

            return item
          
        }))
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
  };

  useEffect(()=>{
    console.log(data);
    if(data){
      const newData = data?.bookings.map(item => {
        const {user:{firstName,lastName} ,service:{img, priceNumber,title} ,amount,address,paymentType,_id,createdAt,receipt_url,status} = item;
        return ({firstName,lastName,img,price:priceNumber,title,amount,address,paymentType,_id,date:createdAt,receipt_url,status})})
      setProducts(newData)
    }
  },[data])

  if(loading){
    return <LoadingAnimation/>
  } 
  if(error){
    return <h1>something went wrong!!!</h1>
  } 

  return (
    <div className="products">
      <div className="info">
        <h1>Services</h1>
        <button onClick={() => setOpen(true)}>Add new service</button>
      </div>
      <DataTable handleComplete={handleComplete} hide setProduct ={setProduct} handleDelete ={handleDelete } slug="products" columns={columns} rows={products} setOpen = {setUpdate} />
      {open && <Model bg = ' #0000005c' center >
        <AddProduct     open = {open} setOpen={setOpen} setProducts={setProducts} />
        </Model>}
      {update && <Model bg = ' #0000005c' center >
        <UpdateService close={setUpdate}  service ={product}  setProducts={setProducts} />
        </Model>}
      {/* {remove && <Model bg = ' #0000005c' center >
        <RemoveProduct setOpen={setOpen} />
        </Model>} */}
    </div>
  );
};

export default AdminBookings;
