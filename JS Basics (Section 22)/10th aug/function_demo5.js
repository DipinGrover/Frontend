function add(x, y) // here x and y are parameters , these are the values that need to be passed in the function
{
    let c = x+y;
    return c;
}

let a = 7 , b = 9 ;
let result = add(a,b); // here a and b are arguements that will be passed at time of calling function 
console.log(result);


// if we pass more than 2 arguements but in function we have only 2 paremeters then it will consider first two parameters only 
