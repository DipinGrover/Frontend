// function to check whether a number is even or odd 
function is_even(num)
{
    if(num%2 == 0)
    {
        return true;
    }
    else{
        return false;
    }
}

// let x = 7;
// let ans = is_even(x);
// if(ans == true)
// {
//     console.log(x , "Even");
// }
// else{
//     console.log(x,"Odd");
// }






// check from 1 to 20 if they are odd or even
for(let i = 1 ; i<=20 ; i++)
{
    if(is_even(i) == true)
    {
        console.log(i , "Even");
    }
    else{
        console.log(i,"Odd");
    }
}