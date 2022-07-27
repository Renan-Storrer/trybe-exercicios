// EXERCICIO 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  // console.log(rectangle[0] * rectangle[1]);
});

// EXERCICIO 2

const sum = (...array) => {
  return array.reduce((contador, numeroAtual) => {
    return contador + numeroAtual
  }, 0)
}

// console.log(sum(10, 20, 30, 40, 50));