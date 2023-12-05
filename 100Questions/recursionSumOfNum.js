let number = parseInt(prompt("Enter the number range : "));
let result = sumOfnum(number);
function sumOfnum(a){
    if(a==1)return 1
    return a+sumOfnum(a-1);
}
console.log(result);