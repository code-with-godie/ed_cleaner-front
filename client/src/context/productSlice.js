import {createSlice}from '@reduxjs/toolkit';
const initialState = {
    loading:false,
    error:null,
    products:[],
    singleProduct:{},
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state,{payload})=>{
            state.products.push(payload);
        },
        productFetchStart:(state)=>{
            state.loading = true;
        },
        productFetchSuccess:(state)=>{
            state.loading = false;
        },
        productFetchFailure:(state,{payload})=>{
            state.loading = false;
            state.error = payload;
        },
        setProduct:(state,{payload})=>{
            state.singleProduct =payload;
        },
        onSuccess:(state)=>{
            state.loading = false;
            state.error = false;
        },
        setCartItem:(state,{payload})=>{
            state.cartItems.push(payload);
        },
        removeCartItem : (state,{payload})=>{
            const newCart = state.cartItems.filter(cartItem => cartItem._id !== payload);
            state.cartItems = newCart;
        },
        increase :(state,{payload})=>{
            const newCart =  state.cartItems.map(cartItem =>{
                if(cartItem._id === payload) {

                    cartItem.amount += 1;
                    return cartItem
                }
                return cartItem;
            });
            state.cartItems = newCart;
        
        },
        decrease:(state,{payload})=>{
            const newCart =  state.cartItems.map(cartItem =>{
                if(cartItem._id === payload) {
                        cartItem.amount -= 1;
                    return cartItem
                }
                return cartItem;
            });
            state.cartItems = newCart;
        
        },
        getCartTotal :(state)=>{
            const {total,amount} = state.cartItems.reduce((cartTotal,cartItem)=>{
                const cartItemCost = cartItem.price * cartItem.amount;
                cartTotal.total += cartItemCost;
                cartTotal.amount += cartItem.amount;
                return cartTotal;
            },{total:0,amount:0});
            state.amount = amount;
            state.total = parseFloat(total.toFixed(2));
        },
        clearCart:(state)=>{
            console.log('clear cart called');
            state.amount = 0;
            state.cartItems = []
            state.total = 0
        }
    }
})


export const {addProduct,productFetchFailure,productFetchSuccess,productFetchStart,setProduct} = productSlice.actions;
export default productSlice.reducer;