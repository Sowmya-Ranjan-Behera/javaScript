let number = parseInt(prompt("Enter the number to be checked : "));
let bool = true;
for (let i = 2; (i**2)<=number; i++) {
   if (number%(i)==0) {
     bool = false;
     
   }
   if((i**2)>number){
    break;
   }
   
}
if(bool){
  console.log("Prime");
}
else{
  console.log("not a prime");
}
