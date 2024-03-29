import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../axios/config';
import {PRODUCT_URL} from '../urls';

export const getProducts = createAsyncThunk('getProducts', async () => {
  try {
    const data = {
      offset: 0,
      pagesize: 10,
      department: '',
    };
    const response = await axiosInstance
      .post(PRODUCT_URL, data)
      .then(res => res);

    return response.data;
  } catch (error) {
    console.log(error);
    return {message: 'Fetch products failed'};
  }
});
