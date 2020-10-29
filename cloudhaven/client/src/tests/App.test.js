import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

test('renders welcome text', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Welcome to CloudHaven/i);
  expect(welcomeElement).toBeTruthy();
});
