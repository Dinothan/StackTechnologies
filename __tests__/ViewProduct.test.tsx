import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewProductScreen from '../src/screens/ViewProduct';
import {updateProduct} from '../src/store/slices/productSlice';

jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));

const mockStore = configureStore([]);

describe('<ViewProductScreen />', () => {
  let store;

  const mockSelectedItem = {
    machineTypes: ['Type1', 'Type2'],
    manufacturers: ['Manufacturer1', 'Manufacturer2'],
    oems: ['OEM1', 'OEM2'],
    skualtcode: 'ALT123',
    skuavailableindays: 7,
    skuavailableitems: 100,
    skucreated: '2022-04-01T12:00:00',
    skudescription_enGB: 'Description in English',
    skudescription_esES: null,
    skudescription_frFR: null,
    skudescription_ptPT: null,
    skudescription_ruRU: null,
    skuenabled: true,
    skufeatures: 'Feature1, Feature2',
    skuid: 1,
    skuimages: 'image1.jpg,image2.jpg',
    skuimageurl: 'https://example.com/image.jpg',
    skulastmodified: '2022-04-01T12:00:00',
    skuname_enGB: 'Product Name in English',
    skuname_esES: null,
    skuname_frFR: null,
    skuname_ptPT: null,
    skuname_ruRU: null,
    skunumber: '12345',
    skunumbersonparts: '54321',
    skupath: '/path/to/product',
    skuprice: 50,
    skuqtyonorder: 20,
    skuretailprice: 60,
    skushortdescription_enGB: 'Short Description in English',
    skushortdescription_esES: null,
    skushortdescription_frFR: null,
    skushortdescription_ptPT: null,
    skushortdescription_ruRU: null,
    skuweight: 2.5,
  };

  beforeEach(() => {
    store = mockStore({
      products: {
        selectedItem: mockSelectedItem,
      },
    });
  });

  it('renders correctly', () => {
    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <ViewProductScreen route={{params: {isEdit: true}}} />
      </Provider>,
    );

    // Assert that important elements are rendered
    expect(getByTestId('saveButton')).toBeTruthy();

    // Assert that the image container is rendered
    expect(getByTestId('imageContainer')).toBeTruthy();

    // Assert that the image is rendered with the correct URL
    const imageElement = getByTestId('productImage');
    expect(imageElement).toBeTruthy();
    expect(imageElement.props.source.uri).toEqual(mockSelectedItem.skuimageurl);
  });

  it('dispatches updateProduct action on save button press', () => {
    const navigation = {navigate: jest.fn()};

    const {getByTestId} = render(
      <Provider store={store}>
        <ViewProductScreen
          route={{params: {isEdit: true}}}
          navigation={navigation}
        />
      </Provider>,
    );

    fireEvent.press(getByTestId('saveButton'));

    const expectedAction = updateProduct(mockSelectedItem);
    expect(store.getActions()).toContainEqual(expectedAction);
  });

  // Add more test cases for other functionalities
});
