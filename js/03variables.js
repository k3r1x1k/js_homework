const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

const email = "example@gmail.com";
const hasAtSymbol = email.includes("@");
const emailLength = email.length;
console.log(hasAtSymbol);
console.log(emailLength);

const word1 = "My";
const word2 = "name";
const word3 = "is";

let fullName = '${word1} ${word2} ${word3} Viktor';
console.log(fullName);

const userName = "Олександра";
const payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);