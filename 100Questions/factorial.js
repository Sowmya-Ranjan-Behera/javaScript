let factNum = parseInt(prompt("Enter the number to find the factorial of the number : "));
let factorial = 1;
while(factNum>1){
    factorial = factorial * factNum;
    factNum-=1;
}
console.log(factorial);
