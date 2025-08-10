// program to check from 1-50 if number is even or odd 
function is_even(num)
{
    if(num%2 == 0)
    {
        return "Even";
    }
    else{
        return "Odd";
    }
}

for(let i = 1 ; i<=50 ; i++)
{
    console.log(i,"is" , is_even(i));
}