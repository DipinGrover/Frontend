let x = {
    name : "Dipin Grover" , 
    age : 22,
    degree  : "B.Tech.",
};

let y = 
{
    name : "Samay",
    found_internship : false,
};

console.log(x["name"]);
y.name = "Athrv Mittal";
console.log(y);

// Note - We cannot acces keys of object using values

// addition of keys in object 
y.marks = 67;
y["company"] = "Google";
console.log(y);

// deletion of keys in object 
delete y.company;
console.log(y);