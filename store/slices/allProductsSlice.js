import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const fetchAllProducts = createAsyncThunk(
  'allProducts/fetchAllProducts',
  async () => {
    const response = await fetch('/api/all');
    console.log(response);
    const data = response.json();
    return data;
  }
);

const initialState = {};

export const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return (state = {
        ...state,
        ...action.payload.category,
      });
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  },
});

export default allProductsSlice.reducer;
