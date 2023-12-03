let armstrong = parseInt(prompt("Enter the number to check : "));
let length = Math.floor(Math.log10(armstrong)+1);
console.log(length);
let copy = armstrong;
let temp=0;
while(length>0){
    length--;
    temp=((copy%10)*Math.pow(10,length) )+temp;
    copy = Math.floor(copy/10);
}
if(armstrong==temp){
    console.log(true);
}
else{
    console.log(false);
}