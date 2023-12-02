let range1 = parseInt(prompt("enter the range 1 : "));
let range2 = parseInt(prompt("Enter the range 2 : "));
if(range1>range2){
    let randomNumber = Math.floor((Math.random()*(range1-range2 +1))+range2);
    console.log(randomNumber);
}
else{
    let randomNumber = Math.floor((Math.random()*(range2-range1 +1))+range1);
    console.log(randomNumber);
}