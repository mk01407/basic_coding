// *       *
// **     **
// ***   ***
// **** ****
// *********

const n = 5;
for (var i = 0; i < n; i++) {
    console.log(`${"*".repeat(i+1)}${" ".repeat((n-i-1)*2)}${"*".repeat(i+1)}`);
}
// console.log(`${"*".repeat(n*2+1)}`);

