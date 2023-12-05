let firstNumber = parseInt(prompt("Enter the first number : "));
let secondNumber = parseInt(prompt("Enter second number : "))
export function hcf(a,b){
    if(a==b)return a;
    if(a==0)return b;
    if(b==0)return a;
    if(a>b){
        return hcf(a%b,b);
    }
    else{
       return hcf(b%a,a);
    }
}
export let gcd = hcf(firstNumber,secondNumber);
console.log(gcd);