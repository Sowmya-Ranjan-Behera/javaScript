const prompt = require("prompt-sync")()
const radius = parseInt(prompt("Enter the radius of the circle : "))
const area = (Math.PI*Math.pow(radius,2)).toFixed(2) 
console.log(`the area of the triangle is ${area}`);


