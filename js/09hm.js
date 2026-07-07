function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  
  return words.length * pricePerWord;
}


console.log(calculateEngravingPrice('JavaScript is awesome', 10)); 
console.log(calculateEngravingPrice('Donec facilisis lacinia dui', 20)); 

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0]; 

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; 
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
console.log(findLongestWord('Google do a roll')); 

function formatString(string) {

  if (string.length <= 40) {
    return string;
  }
  
  return string.slice(0, 40) + '...';
}


console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // < 40, вернет полностью
console.log(formatString('Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.')); 


function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}

console.log(checkForSpam('Latest technology news')); 
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get Premium Sale today!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?')); 