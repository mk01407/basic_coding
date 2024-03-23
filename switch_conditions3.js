//    *
//   ***
//  *****
// *******
const n = 8;
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

const list = [1,2,3,4,5];

let x1 = 0;
const y1 = 0;
list.forEach(element => {
    let x = element;
    const y = element;
    y = 10
    x1 = element;
    // y1 = element;
    console.log(x,"first plcace", y,x1);
});
// console.log("first plcace",x1, y1);