const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param: {name: string, age: number}) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));
