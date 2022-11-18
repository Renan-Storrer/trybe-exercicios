import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('Verifica se, quando eu recebo uma piada, mostro ele na tela', async () => {
  global.fetch = (url) => {
    return Promise.resolve({
      json: () => Promise.resolve({
        id: '7h3oGtrOfxc',
        joke: 'Whiteboards ... are remarkable.',
        status: 200,
      })
    });
  }
  
  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
})