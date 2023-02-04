import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const items = state.cart.find(
        (item) => item.type === action.payload.type
      );
      if (items) {
        items.quantity++;
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    incrementQuantity: (state, action) => {
      const items = state.cart.find(
        (item) => item.type === action.payload.type
      );
      items.quantity++;
    },
    decrementQuantity: (state, action) => {
      const items = state.cart.find(
        (item) => item.type === action.payload.type
      );
      if (items.quantity === 1) {
        const removeItems = state.cart.filter(
          (item) => item.type !== action.payload.type
        );
        state.cart = removeItems;
      } else {
        items.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const removeItems = state.cart.filter(
        (item) => item.type !== action.payload.type
      );
      state.cart = removeItems;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart
} = cartSlice.actions;
