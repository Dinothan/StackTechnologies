import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../thunk/productThunk';
import {ErrorMessage} from '../../types/error';
import {Product} from '../../types/product';

interface ProductSliceProps {
  products: Product[];
  error: ErrorMessage;
  isLoading: boolean;
  selectedItem: Product | null;
}

const initialState: ProductSliceProps = {
  products: [],
  error: {message: ''},
  isLoading: false,
  selectedItem: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getSelectedProduct: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isLoading = true;
      state.error.message = '';
    });

    builder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.products = payload;
      state.isLoading = false;
    });

    builder.addCase(getProducts.rejected, (state, {payload}) => {
      if (payload != null) {
        state.error.message = payload as string;
      }
      state.isLoading = false;
    });
  },
});

export const {getSelectedProduct} = productsSlice.actions;

export default productsSlice.reducer;
