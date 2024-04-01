import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import RowItem from '../src/components/RowItem';

const mockStore = configureStore([]);

describe('<RowItem />', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <RowItem label="Label" value="Value" />
      </Provider>,
    );
    expect(getByText('Label')).toBeTruthy();
    expect(getByText('Value')).toBeTruthy();
  });
});
