// we will find root of a quadratic eqn
function find_roots(a,b,c)
{
    // ax^2+bx+c
    let sqrt_val = Math.sqrt(b*b - (4*a*c))

    let root1 = (-b +sqrt_val) / (2*a);

    let root2 = (-b - sqrt_val) / (2*a);

    console.log(root1 , root2);
}


find_roots(6,12,-48);