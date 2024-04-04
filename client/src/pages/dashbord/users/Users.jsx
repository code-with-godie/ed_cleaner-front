import DataTable from "../../../components/dashboard/dataTable/DataTable";
import "./users.scss";
import { useEffect, useState } from "react";
// import { user } from "../../data/data";
import React from "react";
import Add from "../../../components/dashboard/add/Add";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetch } from '../../../api/useFetch'
import LoadingAnimation from '../../../components/loading/LoadingAnimation'
import { Avatar } from "@mui/material";
// import Add from "../../components/add/Add";

const columns = [
  {
    field: "profilePic",
    headerName: "Avatar",
    width: 70,
    renderCell: (params) => {
      return <Avatar src={params.row.img} alt={params.row.fisrtName} />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Join Date",
    width: 200,
    type: "string",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(state => state.user.currentUser)
  const navigate = useNavigate();

  const [users,setUsers] = useState([]);
  const {loading,data,error} = useFetch('/users');

  useEffect(()=>{
    if(data){
      setUsers(data?.users)
      console.log(data);
    }
  },[data])
 
  if(loading){
    return <LoadingAnimation large />
  }
  if(error){
    return <h1>something went wrong</h1>
  }
  return (
    <div className="users">
      <div className="info">
        <h1>Ed_cleaners Employees</h1>
      </div>
      <DataTable  slug="users" columns={columns} rows={users} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
