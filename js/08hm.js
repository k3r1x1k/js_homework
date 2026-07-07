// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (let i = 0; i < friends.length; i += 1) {
//   string += friends[i];
  

//   if (i < friends.length - 1) {
//     string += ',';
//   }
// }

// console.log(string); 

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const string = friends.join(',');

// console.log(string);

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
cards.splice(2, 1)

console.log(...cards);


const cardToRemove = 'Карточка-3';

const index = cards.indexOf(cardToRemove)
cards.splice(index, 1)

console.log(...cards);


const candToInsert = 'Карточка-3'
const index1 = cards.indexOf(candToInsert)

cards.splice(index1, 0, candToInsert)
console.log(...cards);


const candToUpdate = 'Карточка-4'
const index2 = cards.indexOf(candToUpdate)

cards.splice(index2, 1, `hello`)
console.log(...cards);
