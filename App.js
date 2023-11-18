const values=require("./math.js");

console.log(values.addition(3,5));
console.log(values.substraction(11,4));

//destructure object in 3rd pattern 
const{addition,substraction}=values;

console.log(addition(8,5));
console.log(substraction(10,9));
