import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQty: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, actions) => {
      state.cartQty += 1;
      state.products.push(actions.payload);
      state.totalPrice += actions.payload.price * actions.payload.productQty;
    },
    removeProduct: (state, actions) => {
      state.qty -= 1;
      state.products.push(actions.payload);
      state.totalPrice -= actions.payload.price * actions.payload.productQty;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
