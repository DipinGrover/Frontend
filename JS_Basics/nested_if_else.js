let is_user_prime = true;
let is_user_discovery = true;
let is_user_accorn = false;


if(is_user_prime)
{
    if(is_user_discovery)
    {
        if(is_user_accorn)
        {
            console.log("Enjoy all prime , discovery , accorn content");
        }
        else{
            console.log("Enjoy the prime and discovery content");
        }
    }
    else if(is_user_accorn)
    {
        console.log("Enjoy the prime , accorn  content")
    }
    else{
        console.log("enjoy the prime content");
    }
    
}
else{
    console.log("please buy subscription to enjoy the content");
}