import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import allProductsReducer from './slices/allProductsSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      allProducts: allProductsReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
