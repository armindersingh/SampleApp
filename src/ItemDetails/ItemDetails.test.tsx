import React from 'react';
import { render } from '@testing-library/react';
import ItemDetails from './ItemDetails';

test('renders learn react link', () => {
  const { getByText } = render(<ItemDetails />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
