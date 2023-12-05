let word = prompt("Enter the word to to sort : ")
let newWOrd=word.split('');
newWOrd.sort();
let result = newWOrd.join('')
console.log(result);
