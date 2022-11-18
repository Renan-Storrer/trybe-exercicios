function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100)
}

function divisiveilPorDois() {
  return (retornaNumeroAleatorio() %2) === 0
}

function somaDoisNumeros() {
  return retornaNumeroAleatorio() * retornaNumeroAleatorio();
}

describe("Aprendendo sobre mocks", () => {

  it("Testa se a função foi chamada", () => {

    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled();
  });

  it("Testa o resultado da função", () => {

    somaDoisNumeros = jest.fn().mockReturnValue(10);
  
    expect(somaDoisNumeros()).toBe(10)
  });

  it("Testa quantas vezes a função foi chamada", () => {

    somaDoisNumeros = jest.fn()
    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();

    expect(somaDoisNumeros).toHaveBeenCalledTimes(4);
  });

  it("Testa se retorna true quando o numero é par e false quando o numero é impar", () => {

  });
})