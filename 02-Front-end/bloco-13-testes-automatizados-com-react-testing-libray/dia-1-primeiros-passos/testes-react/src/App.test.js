import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// acessar os elementos da tela
// render()

// interagir com os elementos, (se for necessario)
// userEvent.

// fazer os testes
// expect()

import App from './App';

describe("Tela de inserção de email", () => {

  it('Verifica se existe um input de email na tela', () => {
    // acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");

    // interagir com os elementos, (se for necessario)
    // NESSE CASO NAO FOI PRECISO

    // fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email")
  });

  it('Verifica se existe dois botões na tela', () => {
    // acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole("button");

    // interagir com os elementos, (se for necessario)

    // fazer os testes
    expect(buttons).toHaveLength(2);
  });

  it('Verifica se existe o botão de enviar', () => {
    // acessar os elementos da tela
    render(<App />);
    const button = screen.getByTestId("id-send");

    // interagir com os elementos, (se for necessario)

    // fazer os testes
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Enviar");
  });

  it('Verifica se, ao digitar o email e clicar em enviar, o email é renderizado', () => {
    // acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("id-send");
    const userEmail = screen.getByTestId("id-email-user");

    // interagir com os elementos, (se for necessario)
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(button);

    // fazer os testes
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Valor: teste@teste.com")
  });
})