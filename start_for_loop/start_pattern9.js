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
for (var i = 0; i < n; i++) {
    console.log(`${" ".repeat(n-i)}${"*".repeat(2*i+1)}${" ".repeat((n-i)*2-1)}${"*".repeat(2*i+1)}`);

}

console.log("*".repeat(n*4+1));
for (var i = 0; i < n; i++) {
    
    console.log(`${" ".repeat(i+1)}${"*".repeat((n-i)*2-1)}${" ".repeat((i*2)+1)}${"*".repeat((n-i)*2-1)}`);
    
}

