import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App';

test('Verifica se existe um input de email na tela', () => {
  // acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");

  // interagir com os elementos, (se for necessario)
  // NESSE CASO NAO FOI PRECISO

  // fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email")
});

test('Verifica se existe dois botões na tela', () => {
  // acessar os elementos da tela
  render(<App />);
  const buttons = screen.getAllByRole("button");

  // interagir com os elementos, (se for necessario)

  // fazer os testes
  expect(buttons).toHaveLength(2);
});

test('Verifica se existe o botão de enviar', () => {
  // acessar os elementos da tela
  render(<App />);
  const button = screen.getByTestId("id-send");

  // interagir com os elementos, (se for necessario)

  // fazer os testes
  expect(button).toBeInTheDocument();
  expect(button).toHaveValue("Enviar");
});
