import { createSlice } from '@reduxjs/toolkit';
// import { cart } from '../data/data';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    amount: 0,
    total: 0,
    cartItems: [],
    loading: false,
    error: null,
    pending: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(payload);
      state.cartItems.unshift(payload);
    },
    updateStart: state => {
      state.loading = true;
    },
    onError: (state, { payload }) => {
      state.error = { message: payload, error: true };
      state.loading = false;
    },
    onSuccess: state => {
      state.loading = false;
      state.error = false;
    },
    clearCart:(state)=>{
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeCartItem: (state, { payload }) => {
      const newCart = state.cartItems.filter(
        cartItem => cartItem._id !== payload
      );
      state.cartItems = newCart;
    },

    increase: (state, { payload }) => {
      const newCart = state.cartItems.map(cartItem => {
        if (cartItem._id === payload) {
          return { ...cartItem, quantity: (cartItem.quantity += 1) };
        }
        return cartItem;
      });
      state.cartItems = newCart;
    },
    decrease: (state, { payload }) => {
      const newCart = state.cartItems
        .map(cartItem => {
          if (cartItem._id === payload) {
            return {
              ...cartItem,
              quantity: (cartItem.quantity -= 1),
            };
          }
          return cartItem;
        })
        .filter(cartItem => cartItem.quantity > 0);
      state.cartItems = newCart;
    },
    getCartTotal: state => {
      const { total, amount } = state.cartItems?.reduce(
        (cartTotal, cartItem) => {
          const cartItemCost = cartItem?.price * cartItem.quantity;
          cartTotal.total += cartItemCost;
          cartTotal.amount += cartItem?.quantity;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );

      state.amount = amount;
      state.total = parseFloat(total.toFixed(2));
    },
  },
});

export const { addToCart, removeCartItem,clearCart, increase, decrease, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
