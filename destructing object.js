//mutating variables
let a=120;
let b= 600;
const obj = {a:14,b:23,c:16};
({a,b,c}= obj);
console.log(a,b,c);