let drink = "Чай";

switch (drink) {
    case "Кава":
        console.log("Кава");
        break;
    case "Чай":
        console.log("Чай");
        break;
    case "Сік":
        console.log("Сік");
        break;
    default:
        console.log("Невідомий варіант");
}

let dayOfWeek = "Субота";

switch (dayOfWeek.toLowerCase()) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        console.log("це робочий день");
        break;
    case "субота":
    case "неділя":
        console.log("це вихідний день");
        break;
    default:
        console.log("некоректний день");
}

let monthNumber = 5;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("некоректний номер місяця");
}

let color = "жовтий";

switch (color.toLowerCase()) {
    case "червоний":
        console.log("стоп");
        break;
    case "жовтий":
        console.log("чекати");
        break;
    case "зелений":
        console.log("йти");
        break;
    default:
        console.log("невідомий колір");
}

let num1 = 12;
let num2 = 0;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Попередження: ділення на нуль!");
        } else {
            console.log(num1 / num2);
        }
        break;
    default:
        console.log("невідомий оператор");
}