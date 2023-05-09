import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const TASK_DESCRIPTION = 'Beber água!';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    const button = screen.getByText('Adicionar');

    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    render(<App />);

    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');

    userEvent.type(input, TASK_DESCRIPTION);
    expect(screen.queryByText(TASK_DESCRIPTION)).not.toBeInTheDocument();

    userEvent.click(button);
    expect(screen.queryByText(TASK_DESCRIPTION)).toBeInTheDocument();

    expect(input).toHaveValue('');
  });
});
