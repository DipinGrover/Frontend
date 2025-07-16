let a = 8;
let b = 12;
let c = 14;

// a triangle is valid only if sum of two sides  > third side 

if( a + b > c && a + c > b && b + c  >a)
{
    console.log("Yes it is a valid triangle. ")

}
else{
    console.log("Invalid Triangle.") ;
}