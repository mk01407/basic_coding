//   *
//  ***
// *****
//   *
//  ***
// *****
//   *
//  ***
// *****


const n = 9;
for (var i = 1; i <= n; i++) {
    let x = i%3;
    // console.log(i,x)
    //     // i%2 or i%2 == true or i%2 == 1
    
    if (x == 1) {
        console.log(`${" ".repeat(2)}${"*".repeat(1)}`);
    } 
    else if (x == 2) {
        console.log(`${" ".repeat(1)}${"*".repeat(3)}`);
    } 
    else {
        console.log(`${"*".repeat(5)}`);
    } 
     // else if (i % 3 == 1) {
    //     console.log(`${" ".repeat(1)}${"*".repeat(3)}`);

    // } else {
    //     console.log(`${"*".repeat(5)}`);
    // }
}
