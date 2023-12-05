import { hcf } from "./hcfOrGcd.js";
let firstNumber = parseInt(prompt("enter the first number : "));
let secondNumber = parseInt(prompt("Enter the second number : "));
let lcmOfNumber = hcf(firstNumber,secondNumber);
let result = lcm(firstNumber,secondNumber)
function lcm(a,b){
    if(a%b==0) return a;
    if(b%a==0) return b;
    return lcmOfNumber*(a/lcmOfNumber)*(b/lcmOfNumber);

}
console.log(result);