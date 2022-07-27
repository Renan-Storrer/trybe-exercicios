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

// EXERCICIO 3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};


// complete a assinatura da função abaixo
const personLikes = (nome) => {
  const { name, age ,likes } = nome
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`
}

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'