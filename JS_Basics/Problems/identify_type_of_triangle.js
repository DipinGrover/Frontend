let a = 12;
let b = 12;
let c = 5;

if(a ==b && a==c && b==c)
{
    // it is equilateral 
    console.log("Equilateral");
}
else if(a!=b && a!=c && b!=c)
{
    // it is scalene
    console.log("Scalene");
}
else{
    console.log("Isoceles");
}