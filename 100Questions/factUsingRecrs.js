let range = parseInt(prompt("enter the range of the number : "));
let factResult = fact(range);
function fact(n){
    if(n==0)return 1
    if(n==1)return 1
    return n*fact(n-1);

}
console.log(factResult);