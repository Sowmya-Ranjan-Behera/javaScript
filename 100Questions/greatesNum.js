let firsNum = parseInt(prompt("Enter first number : "));
let secondNum = parseInt(prompt("Enter second number : "));
let thirdNum = parseInt(prompt("Enter third number : "));
// if (firsNum>secondNum) {
//     if (firsNum>thirdNum) {
//         console.log("First num is greater");
//     }
//     else{
//         console.log("third num is grater : ");
//     }
// }else if(secondNum>firsNum){
//     if (secondNum>thirdNum) {
//         console.log("second num is grater :");
//     }
//     else{
//         console.log("third num is greater :");
//     }
// }
// else{
//     console.log("third num is greater : ");
// }

if (firsNum>secondNum & firsNum>thirdNum)console.log("firstnum is greater");
if (secondNum>firsNum & secondNum>thirdNum)console.log("secondnum is greater");
if (thirdNum>firsNum & thirdNum>secondNum)console.log("thirdnum is greater");
