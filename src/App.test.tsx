import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders page section', async () => {
  render(<App />);
  const pageSection = await screen.findByTestId('page-section');
  expect(pageSection).toBeInTheDocument();
});

it('renders bottom navigation', async () => {
  render(<App />);
  const bottomNavigation = await screen.findByTestId('bottom-navigation-section');
  expect(bottomNavigation).toBeInTheDocument();
});
