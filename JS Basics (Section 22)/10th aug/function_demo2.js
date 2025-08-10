function isEven(num)
{
    if(num % 2 ==0)
    {
        return "Even";
    }
    else{
        return "Odd";
    }
}

let x = 101;
let y = 20;
let z = 79;

console.log("X is :", isEven(x));
console.log("Y is :",isEven(y));
console.log("Z is :" ,isEven(z));

