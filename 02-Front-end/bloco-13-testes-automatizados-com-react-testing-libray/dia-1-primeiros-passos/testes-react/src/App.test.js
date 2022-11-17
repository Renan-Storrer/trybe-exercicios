import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App';

test('Verifica se existe um input de email na tela', () => {
  // acessar os elementos da tela
  render(<App />);
  screen.getByLabelText("Email");

  // interagir com os elementos, (se for necessario)

  // fazer os testes

})
