import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';
//basic see if element there
test('renders welcome text', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Welcome to CloudHaven/i);
  expect(welcomeElement).toBeTruthy();
});
