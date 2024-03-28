// *       *
// **     **
// ***   ***
// **** ****
// *********

const n = 5;
for (var i = 1; i <= n; i++){
    let x = i%5;
    if (x == 1) {
        console.log(`${"*".repeat(1)}${" ".repeat(7)}${"*".repeat(1)}`);
    }
    else if (x == 2) {
        console.log(`${"*".repeat(2)}${" ".repeat(5)}${"*".repeat(2)}`);
    }
    else if (x == 3) {
        console.log(`${"*".repeat(3)}${" ".repeat(3)}${"*".repeat(3)}`);
    } 
    else if (x == 4){
        console.log(`${"*".repeat(4)}${" ".repeat(1)}${"*".repeat(4)}`);
    }
    else {
        console.log(`${"*".repeat(9)}`); 
    }
}