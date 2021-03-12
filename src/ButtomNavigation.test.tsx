import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBottomNavigation from './BottomNavigation';

it('renders mixer tab', async () => {
  render(<AppBottomNavigation onTabChanged={jest.fn()} />);
  const mixerTab = await screen.findByTestId('mixer-tab');
  expect(mixerTab).toBeInTheDocument();
});

it('renders drinks tab', async () => {
    render(<AppBottomNavigation onTabChanged={jest.fn()} />);
    const drinksTab = await screen.findByTestId('drinks-tab');
    expect(drinksTab).toBeInTheDocument();
  });