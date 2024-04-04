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
  import 'react-toastify/dist/ReactToastify.css';
import { deleteData } from "../../../api/apiCalls";
const columns = [
  {
    field: "img",   
    headerName: "product Image",
    width: 100,
    renderCell: (params) => {
      return <img  src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 230,
  },
   {
    field: "priceNumber",
    type: "string",
    headerName: "service Price",
    width: 80,
  },
  {
    field: "price",
    headerName: "price description",
    width: 200,
  },
  {
    field: "description",
    headerName: "product Description",
    width: 250,
  },
  // {
  //   field: "createdAt",
  //   headerName: "Creation date",
  //   width: 200,
  //   type: "string",
  // },
  // {
  //   field: "inStock",
  //   headerName: "In Stock",
  //   width: 150,
  //   type: "boolean",
  // },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [products,setProducts] = useState([])
  const [product,setProduct] = useState({})
  const {loading,error,data} = useFetch('/services');

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

  useEffect(()=>{
    console.log(data);
    if(data){
      setProducts(data?.services)
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
      <DataTable  setProduct ={setProduct} handleDelete ={handleDelete } slug="products" columns={columns} rows={products} setOpen = {setUpdate} />
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

export default Services;
