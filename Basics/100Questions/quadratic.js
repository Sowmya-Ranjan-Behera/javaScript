// the quadratic equation must be in the form of ax+by+-c
// the formula for quad eqn is -b +- root of b sqr -4ac upon 2a
let a = parseInt(prompt("Enter the value of a : "));
let b = parseInt(prompt("Enter the value of b : "));
let c = parseInt(prompt("Enter the value of c : "));
let x = Number(-b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
let y = Number(-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
console.log(`the root are x ${x} and y ${y}`);