import {createSlice}from '@reduxjs/toolkit';
const initialState = {
    loading:false,
    currentUser:null,
    token:null,
    error:null,
    initialLoading:false
}
const cartSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        fetchStart:(state)=>{
            state.loading = true;
        },
        fetchEnd:(state)=>{
            state.loading = false;
        },
        login:(state,{payload:{token,user}})=>{
            state.currentUser = user;
            state.token = token;
            localStorage.setItem('ed_cleaners-user',JSON.stringify(user));
            localStorage.setItem('ed_cleaners-access-token',JSON.stringify(token));
        },
        logout:(state)=>{
            state.currentUser = null;
            state.token = null;
            localStorage.setItem('ed_cleaners-user',JSON.stringify(null));
            localStorage.setItem('ed_cleaners-access-token',JSON.stringify(null));
        },
        getUser : (state)=>{
            state.initialLoading = true;
         const user = JSON.parse(localStorage.getItem('ed_cleaners-user'));
          const token = JSON.parse(localStorage.getItem('ed_cleaners-access-token'));
            state.currentUser = user;
            state.token = token;
            state.initialLoading = false;
        },
    }
})


export const {fetchStart,fetchEnd,login,logout,getUser} = cartSlice.actions;
export default cartSlice.reducer;