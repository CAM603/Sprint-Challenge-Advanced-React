import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

afterEach(cleanup);

test('App renders', () => {
  render(<App />);
})

test('Toggle button changes text', () => {
  const app = render(<App />);

  const toggleBtn = app.getByTestId('toggle-btn');
  
  fireEvent.click(toggleBtn);
  expect(toggleBtn.textContent).toBe('Light Mode');
  
});
