import React from 'react';
import { render } from '@testing-library/react';
import ItemsList from './ItemsList';

test('renders learn react link', () => {
  const { getByText } = render(<ItemsList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
