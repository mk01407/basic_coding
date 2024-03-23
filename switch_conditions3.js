//    *
//   ***
//  *****
// *******
const n = 4;
for (var i = 1; i <= n; i++) {
    const x = i%4;
    switch (x) {
        case 0:
          console.log (`${"*".repeat(7)}`);
             break;
         case 1:
            console.log(`${" ".repeat(3)}${"*".repeat(1)}`);
             break;
         case 2:
            console.log(`${" ".repeat(2)}${"*".repeat(3)}`);
             break;
         case 3:
            console.log (`${" ".repeat(1)}${"*".repeat(5)}`);
             break;            
    }
}