const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//---------------------------------------------------------------------------

// EXERCICIO 1

// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

function formatedBookNames(booksAll) {
  return booksAll.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`
  })
}

// console.log(formatedBookNames(books));

//-------------------------------------------------------------------------------

// EXERCICIO 2

// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

function nameAndAge(books) {
  let a = books.map((book) => {
    let obj = {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name
    }
    return obj
  })
  let result = a.sort((a, b) => {
    return a.age - b.age
  })
  return result
}

// console.log(nameAndAge(books));

//-------------------------------------------------------------------

// EXERCICIO 3 return
// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

function fantasyOrScienceFiction(books) {
  return books.filter((book) => {
    if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
      return book
  })
}

// console.log(fantasyOrScienceFiction(books));

//-------------------------------------------------------------------------------

// EXERCICIO 4

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

function oldBooksOrdered(books) {
  let filtred = books.filter((book) => {
    if ((2022 - book.releaseYear) > 60) {
      return book
    }
  })
  const result = filtred.sort((a, b) => {
    return a.releaseYear - b.releaseYear
  })
  return result
}

// console.log(oldBooksOrdered(books));

//----------------------------------------------------------------------------

//EXERCICIO 5

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

function fantasyOrScienceFictionAuthors(books) {
  let authors = []
  let booksFOSF = books.filter((book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      authors.push(book.author.name)
    }
  })
  const result = authors.sort()
  return result
}

// console.log(fantasyOrScienceFictionAuthors(books));

//-----------------------------------------------------------------------------

// EXERCICIO 6

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

function oldBooks(books) {
  let filtred = []
  books.filter((book) => {
    if ((2022 - book.releaseYear) >= 60) {
      filtred.push(book.name)
    }
  })
  return filtred
}
// console.log(oldBooks(books));

//------------------------------------------------------------------------------

//EXERCICIO 7

// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(books) {
    return books.filter((book) => (
      book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.'
    ))[0].name;
}

console.log(authorWith3DotsOnName(books));
