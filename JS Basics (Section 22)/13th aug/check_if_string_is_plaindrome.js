function check_palindrome(num)
{
    // convert the number to a string 
    let str = "" + num; // converting num to string so we can check for palindrome
    let i = 0; // starting pointer 
    let j = str.length - 1;

    while(i<=j)
    {
        if(str[i] == str[j])
        {
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    // if we completed the loop and never found the mismatch then return true 
    return true;
}

let variable = 19891;
let ans = check_palindrome(variable);
console.log("Is" , variable , "Palindrome ?" , ans);