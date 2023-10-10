// here we will learn about the different types of conversion
// like if you take an input as string of numbers but you want to perform the numerical operation then
// you have to convert the string into integer

// for conversion of the string to integer you have to write

let ageInNumber=10
ageInString = String(ageInNumber)
console.log(ageInString);
console.log(Number("12da"));
console.log(Number(false));
// lets take some example to learn conversion

//      intial_input        to      final_output

//         0                string      '0'
//        "11"              integer     11
//        "abs"             integer     NaN(not a number)
//       "12abs"            integer     NaN
//       "sowmya"           boolean     true
//         ""               boolean     false
//      1-inf and -1-inf    boolean     true
//          0               boolean     false
//        false             string      flase(in string)  
//        false             Number      0
//        true              number      1

