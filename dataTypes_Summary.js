//  so in this context we learn that what are datatypes and how to know the type of data 
// in order to know the type of data we use the typeof operator
// there are total 7 types of data types 
// they are String Number Boolean Null Undefined symboll BigInt. these all are the 
// primitive data types 

// #note
// if we are declaring const then we have to assign some value to it 
// other wise it will not take as a correct statement but we can assign the values like
// null and undefined to the const variable 



const score = 29
const name = "Sowmya Ranjan"
let ID;
let place = null
let age = undefined
let birth = Symbol("07/12/2001")// the symbol is used to assign the value unique

// non primitive data types are Arrays Objects and Function


//    ** array creation **
let heroes = ["Saktiman", "spider man", "Iron man"];
console.log(heroes);


//      ** Object creation **
let userOne = {
    name: "Sowmya",
    age: 10,
    email: "amsow@gmail.com"

}

console.log(userOne);

// you can acess the datatypes by using the . operator
// all the primitive data types are stored in Stack area
// all the non-primitve data types are stored in Heap area
// so if we assign the values into another variable and change the value
// then it will not be affected to the original value.

//              ** for example **



let firstNumber = 21
let changeNumber = firstNumber;
changeNumber = 31
console.log(changeNumber); // it will give output as 31
console.log(firstNumber); // it will give output as 21
// Because the number is stored in stack memory 
// and the number cannot be changed its only copied and assigned to another variable

// let se an example of heap memory

let userTwo = userOne;
userTwo.age = 13;

console.log(userOne.age);// it will give the output as 13 because 
// as  the values is stored in heap area


