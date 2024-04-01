import productReducer, {
  initialState,
  updateProduct,
} from '../src/store/slices/productSlice';

describe('productSlice', () => {
  it('should return the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle updateProduct', () => {
    const prevState = {
      products: [{skuid: 1, name: 'Product 1'}],
      error: {message: ''},
      isLoading: false,
      selectedItem: null,
    };
    const updatedProduct = {skuid: 1, name: 'Updated Product 1'};
    const action = {type: updateProduct.type, payload: updatedProduct};
    const newState = productReducer(prevState, action);
    expect(newState.products[0].name).toEqual('Updated Product 1');
  });
});
