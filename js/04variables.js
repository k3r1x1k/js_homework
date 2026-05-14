const field1 = "Hello";
const field2 = "World";

if (field1 != "" && field2 != "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

const two = 2
const six = 6
const sum = two + six
if (sum >= 10){
  console.log("Сума більша за 10")
}else{
  console.log("Сума менша або дорівнює 10")
}

const js = "JavaScript"

if (js.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript")
}else{
    console.log("Текст не містить слово JavaScript")
}

const number = 14; 

if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

const name = "Кирил";
const email = "kiril@mail.com";
const password = "1234567";

if ( name.length >= 3 && email.includes("@", ".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}