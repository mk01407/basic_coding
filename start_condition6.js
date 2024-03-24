//     *       *
//    ***     ***
//   *****   *****
//  ******* *******
// *****************
//  ******* *******
//   *****   *****
//    ***     ***
//     *       *
const n = 9;
for (var i = 1; i <= n; i++) {
    const x = i%9;
    if (x == 1) {
        console.log(`${" ".repeat(5)}${"*".repeat(1)}${" ".repeat(7)}${"*".repeat(1)}`);
    }
    else if (x == 2) {
        console.log(`${" ".repeat(4)}${"*".repeat(3)}${" ".repeat(5)}${"*".repeat(3)}`);
    }
    else if (x == 3) {
        console.log(`${" ".repeat(3)}${"*".repeat(5)}${" ".repeat(3)}${"*".repeat(5)}`);
    }
    else if (x == 4) {
        console.log(`${" ".repeat(2)}${"*".repeat(7)}${" ".repeat(1)}${"*".repeat(7)}`);
    }
    else if (x == 5) {
        console.log(`${" ".repeat(0)}${"*".repeat(17)}`);
    }
    else if (x == 6) {
        console.log(`${" ".repeat(2)}${"*".repeat(7)}${" ".repeat(1)}${"*".repeat(7)}`);
    }
    else if (x == 7) {
        console.log(`${" ".repeat(3)}${"*".repeat(5)}${" ".repeat(3)}${"*".repeat(5)}`);
    }
    else if (x == 8) {
        console.log(`${" ".repeat(4)}${"*".repeat(3)}${" ".repeat(5)}${"*".repeat(3)}`);
    }
    else {
        console.log(`${" ".repeat(5)}${"*".repeat(1)}${" ".repeat(7)}${"*".repeat(1)}`);
    }

}