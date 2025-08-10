let a = 8 , b = 8 , c = 8;
if(a==b && a==c && b==c)
{
    // equilateral
    console.log("It is equilateral triangle.");
}
else if(a!=b && a!=c && b!=c)
{
    console.log("It is Scalene triangle.");
}
else{
    console.log("It is isoceles triangle.");
}