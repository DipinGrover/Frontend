function is_even_or_odd( i)
{
    if( i % 2 == 0)
    {
        return "Even";
    }
    else{
        return "Odd";
    }
}


for(let i = 1 ; i<= 50 ; i++)
{
    console.log(i , "is" , is_even_or_odd(i));
}