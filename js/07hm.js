let numbers = [5, 20, 15];
numbers[1] = 10; 
console.log(numbers);

let fruits = ["яблуко", "банан", "груша"];
fruits.push("апельсин");
console.log(fruits);

let arr = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Сума:", sum);

let numArr = [1, 2, 3, 4, 5];
for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}

let words = ["кіт", "собака", "слон", "жирафа", "бегемот"];
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        console.log(words[i]);
    }
}

let values = [3, 7, 2, 9, 5, 8, 1, 4, 6, 10];
let maxVal = values[0];
for (let i = 1; i < values.length; i++) {
    if (values[i] > maxVal) {
        maxVal = values[i];
    }
}
console.log("Максимальне значення:", maxVal);

let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < tenNumbers.length; i++) {
    if (tenNumbers[i] % 2 === 0) {
        console.log(tenNumbers[i]);
    }
}