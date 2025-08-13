console.log("abc" == "abc");
let x = "abc"; // string literal
let y = "abc";

console.log(typeof x);// its type is string 
console.log(typeof y); // its type is string 


console.log(x == y);

let p = String("abc");
let q = new String("abc"); // string object

console.log(typeof p); // its type is string  
console.log(typeof q); // its type is object 

console.log(p == q);
console.log(q == x);

console.log(p === q); // false as one is object and other is string 
console.log(q === x); // false as one is object and other is string 
console.log(y === p); // true as both are strings 
