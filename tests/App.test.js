import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';
import Demo from '../src/pages/demo';
import Demo2 from '../src/pages/demo2';
import Vendor from '../src/pages/vendor';

// basic see if element there
test('renders welcome text', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Welcome to CloudHaven/i);
  expect(welcomeElement).toBeTruthy();
});

test('renders demo 1 field', () => {
  const { getByText } = render(<Demo />);
  const welcomeElement = getByText(/Demo 1/i);
  expect(welcomeElement).toBeTruthy();
});

test('renders demo 2 field', () => {
  const { getByText } = render(<Demo2 />);
  const welcomeElement = getByText(/Demo 2/i);
  expect(welcomeElement).toBeTruthy();
});

test("renders grant's demo field", () => {
  const { getByText } = render(<Vendor />);
  const welcomeElement = getByText(/Grant's Demo/i);
  expect(welcomeElement).toBeTruthy();
});
