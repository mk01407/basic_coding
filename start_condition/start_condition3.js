//    *
//   ***
//  *****
// *******
//    *
//   ***
//  *****
// *******

const n = 8;
for (var i = 1; i <= n; i++) {
    let x = i % 4;
    if (x == 1) {
        console.log(`${" ".repeat(3)}${"*".repeat(1)}`)
    }
    else if (x == 2) {
        console.log(`${" ".repeat(2)}${"*".repeat(3)}`)
    }
    else if (x == 3) {
        console.log(`${" ".repeat(1)}${"*".repeat(5)}`)
    }
    else {
        console.log(`${"*".repeat(7)}`)
    }
}