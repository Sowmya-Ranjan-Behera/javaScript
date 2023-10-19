// so in this chapter we will study an important concept called date
const today = new Date
console.log(today.toString());//Fri Oct 20 2023 04:34:20 GMT+0530 (India Standard Time)
// using toLocaleString() we can convert a number into  12333
// then I have to use 
const num = 231123
console.log(num.toLocaleString("en-IN"));//2,31,123
console.log(today.toISOString());//2023-10-19T23:04:20.316Z
console.log(today.toDateString());//Fri Oct 20 2023
console.log(today.toLocaleString());//10/20/2023, 4:34:20 AM
let date = new Date
console.log(date.getDay());//5
console.log(date.getMonth());


let newDate = new Date("04-11-2023")
console.log(newDate.toString());//Tue Apr 11 2023 00:00:00 GMT+0530 (India Standard Time)