import {createSlice}from '@reduxjs/toolkit';
const initialState = {
    showToast:false,
    toastMessage:''
}
const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        openToast:(state,{payload})=>{
            console.log(payload);
            state.showToast = true;
            state.toastMessage =payload;
        },
        closeToast:(state)=>{
            state.showToast = false;
        },
        fetchSuccess:(state)=>{
           state.loading = false;
        },
        login:(state,{payload:{token,user}})=>{
            state.currentUser = user;
            state.token = token;
            localStorage.setItem('ojay-user',JSON.stringify(user));
            localStorage.setItem('ojay-user-access-token',JSON.stringify(token));
        },
        logout:(state)=>{
            state.currentUser = null;
            state.token = null;
            localStorage.setItem('ojay-user',JSON.stringify(null));
            localStorage.setItem('ojay-user-access-token',JSON.stringify(null));
        },
        getUser : (state)=>{
            state.initialLoading = true;
         const user = JSON.parse(localStorage.getItem('ojay-user'));
          const token = JSON.parse(localStorage.getItem('ojay-user-access-token'));
            state.currentUser = user;
            state.token = token;
            state.initialLoading = false;
        },
    }
})


export const {openToast,closeToast} = appSlice.actions;
export default appSlice.reducer;