// Yaha p humlog sum of multiple times nikalenge.


// all variables
//  Onject's are key value pairs.
const variables = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
};

// Types of loop?
// for, foreach, filter, map

let multiplications = 1
Object.keys(variables).forEach(resp => {
    {
        multiplications *= variables[resp];
        console.log(variables[resp], resp);
    }
}) 

// Type your code here.

console.log("Total of all the values: ",multiplications);