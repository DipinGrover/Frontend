function is_Prime(x)
{
    for(let i = 2 ; i<x ; i++)
    {
        if(x%2 == 0)
        {
            // divisible by other so not prime
            return false;
        }
    }
    return true;
}



let res = is_Prime(17);
console.log(res);