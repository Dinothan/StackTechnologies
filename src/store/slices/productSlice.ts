import {PayloadAction, createSlice} from '@reduxjs/toolkit';
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
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        product => product.skuid !== action.payload,
      );
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.map(product =>
        product.skuid === action.payload.skuid ? action.payload : product,
      );
    },
    updateSelectedProduct(
      state,
      action: PayloadAction<{fieldName: keyof Product; value: any}>,
    ) {
      if (state.selectedItem) {
        const {fieldName, value} = action.payload;
        state.selectedItem[fieldName] = value as never;
      }
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

export const {
  getSelectedProduct,
  deleteProduct,
  updateSelectedProduct,
  updateProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
