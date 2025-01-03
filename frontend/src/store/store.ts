import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productSlice from './reducers/productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;