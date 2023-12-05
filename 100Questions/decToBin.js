let decimal = parseInt(prompt("Enter the decimal number"));
let rem,i=1,result=0;

while(decimal){
    
    rem= decimal% 2;
    console.log(`${decimal} % 2 remider got ${rem} and quoitent got ${parseInt(decimal/2)}`);
    decimal=parseInt(decimal/2);
    result=rem*i+result;
    i = i*10
}
console.log(`the binary value we got is ${result}`);