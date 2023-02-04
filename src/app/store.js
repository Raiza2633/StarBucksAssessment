import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice';
import { cartReducer } from '../features/CartSlice';
export const store = configureStore({
  reducer: {
    user:userReducer,
    cart: cartReducer
  },
});
