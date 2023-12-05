let word = prompt("Enter the word to check : ");
let arr=word.split('');
arr=arr.reverse();
let check=arr.join('');
console.log(check);
if(check==word){
    alert("this is a paliendrome string");

}
else{
    alert("this is not a paliendrome string");
}