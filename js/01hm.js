// const myAge = 14;
// console.log (myAge);

// const myName = "Kiril";
// console.log (myName);

// const isStudent = "false";
// console.log (myName);

// const myString = "«Ах, люблю я кавун. Навіть...»";
// console.log (myName);

// let myNumber  = 8;
// console.log (myNumber);
// myNumber  = 8+10;
// console.log (myNumber);

// const myNull "null";
// console.log (myNull);

// 1. age
const age = 15; // вкажи свій вік
console.log("Вік:", age);

// 2. name
const name = "Кирилл"; // вкажи своє ім'я
console.log("Ім'я:", name);

// 3. isStudent
const isStudent = true; // або false
console.log("Студент:", isStudent);

// 4. myString
const myString = "«Ах, люблю я кавун. Навіть...»";
console.log("Цитата:", myString);

// 5. myNumber
const myNumber = 25 + 10; 
console.log(myNumber);

// 6. myNull
const myNull = null;
console.log(myNull);

// 7. prompt() + typeof
const userName = prompt("Введіть своє ім’я");
alert("Ваше ім’я: " + userName);
console.log(typeof userName);

// 8. confirm()
const userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log("Відповідь користувача:", userAnswer);
// OK → true
// CANCEL → false

// 9. alert + confirm
alert("Увага! Дія може бути небезпечною.");

const confirmAction = confirm("Ви впевнені, що хочете продовжити?");
if (confirmAction) {
    console.log("Користувач підтвердив дію.");
} 

else {
    console.log("Користувач скасував дію.");
}
