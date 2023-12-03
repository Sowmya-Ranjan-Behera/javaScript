let n = parseInt(prompt("Enter the number range : "));
let firstNum = 0;
let secondNum = 1;
console.log(firstNum);
console.log(secondNum);

let sum;
for (i = 0; i < n; i++) {
    
    sum = firstNum+secondNum;
    firstNum = secondNum;
    secondNum = sum;
    console.log(sum);
    
}