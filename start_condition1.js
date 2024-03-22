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
    if (i%2) {
        console.log(`${" ".repeat(1)}${"*".repeat(1)}`);
    } else {
        console.log(`${"*".repeat(3)}`);
    }
}

// console.log(`Hello World! ${n}`,n);
// console.log("Hello World! ${n}",n);
// console.log('Hello World! ${n}',n);
