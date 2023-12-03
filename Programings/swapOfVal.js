let prompt = require("prompt-sync")()
let firstNum = parseInt(prompt("Enter first number : "))
let secondNum = parseInt(prompt("Enter second number : "))
// lets use three different methods 
//              using temporary variable

// let temp = firstNum
// firstNum = secondNum
// secondNum = temp
// console.log(`the number after interchange are first num ${firstNum} and second num ${secondNum}`)

//              using bitwise operator

// firstNum = firstNum^secondNum
// secondNum = firstNum^secondNum
// firstNum =firstNum^secondNum
// console.log(`the number after interchange are first num ${firstNum} and second num ${secondNum}`)


//              using arithmetic operator
firstNum = firstNum+secondNum
secondNum =firstNum-secondNum
firstNum = firstNum-secondNum
console.log(`the number after interchange are first num ${firstNum} and second num ${secondNum}`)
