import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import AlertComponent from '../src/components/Alert';
import {PaperProvider} from 'react-native-paper';

describe('<AlertComponent />', () => {
  const defaultProps = {
    visible: true,
    title: 'Test Title',
    description: 'Test Description',
    actionButtons: [
      {text: 'Confirm', onPress: jest.fn()},
      {text: 'Cancel', onPress: jest.fn()},
    ],
  };

  test('renders correctly', () => {
    const {getByText} = render(
      <PaperProvider>
        <AlertComponent {...defaultProps} />
      </PaperProvider>,
    );
    expect(getByText('Test Title')).toBeDefined();
    expect(getByText('Test Description')).toBeDefined();
    expect(getByText('Confirm')).toBeDefined();
    expect(getByText('Cancel')).toBeDefined();
  });

  test('calls onPress for each button', async () => {
    const {getByText} = render(
      <PaperProvider>
        <AlertComponent {...defaultProps} />
      </PaperProvider>,
    );
    await act(async () => {
      fireEvent.press(getByText('Confirm'));
      fireEvent.press(getByText('Cancel'));
      await waitFor(() => {
        expect(defaultProps.actionButtons[0].onPress).toHaveBeenCalled();
        expect(defaultProps.actionButtons[1].onPress).toHaveBeenCalled();
      });
    });
  });
});
