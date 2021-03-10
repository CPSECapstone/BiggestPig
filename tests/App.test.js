import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';
// basic see if element there
test('renders welcome text', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Welcome to CloudHaven/i);
  expect(welcomeElement).toBeTruthy();
});

test('renders demo 1 field', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Demo 1/i);
  expect(welcomeElement).toBeTruthy();
});

test('renders demo 2 field', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Demo 2/i);
  expect(welcomeElement).toBeTruthy();
});

test("renders grant's demo field", () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Grant's Demo/i);
  expect(welcomeElement).toBeTruthy();
});

test('renders table demo field', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Table Demo/i);
  expect(welcomeElement).toBeTruthy();
});