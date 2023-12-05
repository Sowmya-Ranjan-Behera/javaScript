let word = prompt("Enter the word to reverse");
let arr = word.split('');
// console.log(arr)
let i=0,j=word.length-1;
let mid =parseInt(word.length/2);
while(mid){
    let temp;
    temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
    mid--;
}
word=arr.join('');
console.log(word);
console.log()