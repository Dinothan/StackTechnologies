import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../src/components/Header';

describe('<Header />', () => {
  test('renders correctly with children', () => {
    const {getByText} = render(<Header>Test header text</Header>);
    const headerText = getByText('Test header text');
    expect(headerText).toBeDefined();
  });

  test('applies custom style correctly', () => {
    const customStyle: import('react-native').TextStyle = {color: 'red'};
    const {getByText} = render(
      <Header style={customStyle}>Custom Header</Header>,
    );
    const headerText = getByText('Custom Header');
    expect(headerText).toHaveStyle(customStyle);
  });
});
