// if we do not return anything in function then it automatically return undefined 

function func(name)
{
    console.log("hello" , name ,"welcome to JS.");
    // we have not returned anything so js wil return undefined 
}

let result = func("Dipin Grover");
console.log(result); // undefined will be returned