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

// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// EXERCICIO 4

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// console.log(people[0].name)

// escreva filterPeople abaixo
const filterPeople = (pessoas) => {
  const pessoasFiltredd = pessoas.filter((pessoa) => {
    let nomes = []
    if (pessoa.bornIn < 1999) {
      return pessoa.name
    }
  })
  let nomes = []
  for(let i = 0; i < pessoasFiltredd.length; i += 1){
    nomes.push(pessoasFiltredd[i].name)
  }
  return nomes
}

console.log(filterPeople(people));
