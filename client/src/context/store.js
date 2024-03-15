import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productSlice from "./productSlice";
import appReducer from "./appSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        products:productSlice,
        app:appReducer,
        cart:cartReducer
    }
})