import {
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link, useLocation } from "react-router-dom";
import view from '../../../assets/view.svg'
import deleteIcon from '../../../assets/delete.svg'
import { useSelector } from "react-redux";
import Model from "../model/Model";

const DataTable = (props) => {
  const location = useLocation();
  const show = location.pathname.startsWith('/products')
  const currentUser = useSelector(state => state.user.currentUser);

  const update = product =>{
    props.setProduct(product)
    props.setOpen(true)
    // props.setEdit(true)
  }

  const actionColumn= {
    field: "action",
    headerName: "booking controllers",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          {
            !props.hide &&
          <div onClick={()=> update(params.row)} >
            <img src={view} alt="" />
          </div>
           }
          { 
           props.hide ? 
          <div className="delete">
            <button disabled={params.row.status === 'completed'} onClick={() => props.handleComplete(params.row._id)} className={`${params.row.status} btn`} > {params.row.status === 'completed'?'already completed':'complete booking'} </button>
          </div>:
          <div className="delete" onClick={() => props.handleDelete(params.row._id)}>
            <img src={deleteIcon} alt="" />
          </div>
          }
          {
            props.cancel &&
             <div className="delete">
            <button disabled={params.row.status === 'completed'} onClick={() => props.handleComplete(params.row._id)} className={`${params.row.status} btn`} > {params.row.status === 'pending'?'cancel booking':'completed'} </button>
          </div>
          }
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        getRowId={row => row._id}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
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
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
