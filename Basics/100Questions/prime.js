let number = parseInt(prompt("Enter the number to be checked : "));
let bool = true;
for (let i = 2; (i)<=number; i**2) {
   if (number%(i)==0) {
     bool = false;
     console.log("not a prime");
   }
   
}
console.log(bool);
console.log("prime");