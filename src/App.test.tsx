import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
interface RenderWithRouterProps {
  route?: string;
  history?: MemoryHistory;
}

export const renderWithRouter = (
  ui: React.ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RenderWithRouterProps = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
};

describe('App', () => {
  test('renders darkmode link', () => {
    render(<App />);
    const darkModeSwitch = screen.getByText(/Switch theme/i);
    expect(darkModeSwitch).toBeInTheDocument();
  });
});
