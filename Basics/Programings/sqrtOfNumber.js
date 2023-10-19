const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter a number for root calculation : "))
const sqrt = number**0.5
console.log(`the square root of ${number} is ${sqrt}`);

// we can use Math class funtion to find the sqare root also

const newRoot = Math.sqrt(number) //using math class
console.log(`the square root of ${number} is ${newRoot}`);
