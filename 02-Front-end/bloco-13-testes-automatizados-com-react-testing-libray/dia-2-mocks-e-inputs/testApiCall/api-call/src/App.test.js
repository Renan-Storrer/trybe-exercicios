import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('Verifica se, quando eu recebo uma piada, mostro ele na tela', async () => {
  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
})