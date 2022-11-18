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

    expect(somaDoisNumeros).toHaveBeenCalled();
  });

  it("Testa o resultado da função", () => {

  });

  it("Testa quantas vezes a função oi chamada", () => {

  });

  it("Testa se retorna true quando o numero é par e false quando o numero é impar", () => {

  });
})