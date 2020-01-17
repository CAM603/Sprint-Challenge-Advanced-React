import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

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

describe('All countries are rendered', () => {
  test('United States is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/united states/i)
  })
  
  test('Brazil is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/brazil/i)
  })
  
  test('France is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/france/i)
  })

  test('Sweden is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/sweden/i)
  })
  
  test('Netherlands is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/netherlands/i)
  })
  test('Australia is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/australia/i)
  })
  
  test('Chile is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/chile/i)
  })
  
  test('England is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/england/i)
  })

  test('Italy is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/italy/i)
  })
  
  test('Germany is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/germany/i)
  })

  test('Canada is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/canada/i)
  })
  
  test('Spain is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/spain/i)
  })

  test('Norway is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/norway/i)
  })
  
  test('Argentina is rendered', () => {
    const {getByText} = render(<App />);
    getByText(/argentina/i)
  })
})