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

// console.log(Object.keys(variables)); This part of code will devide the object into list formate to apply the looping operation.
let sum = 10;
Object.keys(variables).forEach(resp => {
    {
        sum += variables[resp];// variables["a"] + variables["b"] ......variables["f"] hum sabka sum kar rahe h.
        // console.log(variables[resp], resp, sum);
    }
});

// for(let j=0; j <= Object.keys(variables).length; j++) {
//     console.log(j, "Print J values")
// }
// (resp => {
//     {
//         sum += variables[resp];
//         console.log(variables[resp], resp);
//     }
// }) 

console.log("Total of all the values: ",sum);