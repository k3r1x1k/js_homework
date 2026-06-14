let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue; 
  }
  console.log(i);
}

const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

const n = 5;

for (let i = 1; i <= 10; i++) {
  if (i >= n) {
    break; 
  }
  console.log(i);
}

let i = 0;

while (i < 20) {
    i++;
    
    // Перевіряємо, чи ділиться число на 3 без остачі
    if (i % 3 === 0) {
        continue; // Пропускаємо ітерацію для чисел, кратних 3
    }
    
    console.log(i);
}
