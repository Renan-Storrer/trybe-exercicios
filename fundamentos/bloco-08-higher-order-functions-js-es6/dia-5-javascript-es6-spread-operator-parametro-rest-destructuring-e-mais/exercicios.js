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

// console.log(filterPeople(people));

//----------------------------------------------------------------------------

// EXERCICIO 5

const myList = [1, 2, 3];

const swap =([a, b, c]) => [c, b, a]

// console.log(swap(myList));

//-----------------------------------------------------------------------------

// EXERCICIO 6

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = (modelo, fabrica, ano) => {
//   let result = {
//     modelo: modelo,
//     fabrica: fabrica,
//     ano: ano,
//   }
//   return result
// }

const toObject = ([name, brand, year]) => ({ name, brand, year });

// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));

//------------------------------------------------------------------------------

// EXERCICIO 7

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = (object) => {
  const { name, length, measurementUnit } = object;
  return `${name} is ${length} ${measurementUnit} long`
}

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

//------------------------------------------------------------------------

// EXERCICIO 8

const greet = (user = 'usuário', saudacao = 'Hi') => (`${saudacao} ${user}!`);

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

//--------------------------------------------------------------------------

// EXERCICIO 9


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons
let months = [... winter, ...spring, ...summer, ...autumn];
months.push(months[0])
months.shift(months[0])
// console.log(months);
console.table(months)