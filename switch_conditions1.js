//   *
// *****
//   *
// *****
//   *
// *****
//   *
// *****
//   *

const n = 9;
for (var i = 1; i <= n; i++) {
    const x = i%2;
    switch (x) {
        case 0:
            console.log(`${"*".repeat(5)}`);
            break;
        case 1:
            console.log(`${" ".repeat(2)}${"*".repeat(1)}`)
            break;    
    }

}