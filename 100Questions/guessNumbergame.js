
let originalNumber = Math.floor(Math.random() * (5)+1) + 10;

let bool = false;
for(let i=0;i<3;i++){
    let guess = parseInt(prompt("Guess a number 10 to 15 "))
    if(guess==originalNumber){
       bool=true;
       break;
    }
       
}
if(bool==true){
    alert(`you won the game congrajulation`)
}else{
    alert(`oops you lost the game the nmber is ${originalNumber}`)
}
if(true){
    console.log("False message is triggred");
}