var variable1 = 3;
let variable2 = 6;
const variable3 = 8;

variable1 += 1;
variable2 += 1;
// variable3 += 1;
console.log(variable1,variable2,variable3)

var variable5 = 3;
let variable6 = 6;
const variable8 = 8;

variable1 -= 1;
variable2 -= 1;
// variable3 -= 1;
console.log(variable5,variable6, variable8)

var variable9 = 3;
let variable10 = 6;
const variable11 = 8;

variable9 *= 1;
variable10 *= 1;
// variable11 *= 1;
console.log(variable9,variable10,variable11)

// *
// **
// ***
// ****
// *****

const n = 5;
for (var i = 1; i <= n; i++) {
    console.log("*".repeat(i))
}


// *****
// ****
// ***
// **
// *

const m = 7;
for (var i = 1; i <= m; i++) {
    console.log("*".repeat(m-i))
}

//     *
//    ***
//   *****
//  *******
// *********

const j = 5;
for (var i = 0; i <= j; i++) {
    console.log(" ".repeat(j-i), "*".repeat(2*i+1))
}




// *********
//  *******
//   *****
//    ***
//     *


const q = 5;
for (var i = 1; i <= q; i++) {
    console.log(" ".repeat(i), "*".repeat((q-i)*2+1))
}



// *****^*****
// ****^^^****
// ***^^^^^***
// **^^^^^^^**
// *^^^^^^^^^*

const w = 5;
for (var i = 0; i < w; i++) {
    console.log(`${"*".repeat(w-i)}${"^".repeat(2*i+1)}${"*".repeat(w-i)}`)
}




// *****^*****
// ****^^^****
// ***^^^^^***
// **^^^^^^^**
// *^^^^^^^^^*
// ^^^^^^^^^^^
// **^^^^^^^**
// ***^^^^^***
// ****^^^****
// *****^*****


const e = 5;
for (var i = 0; i <= e; i++) {
    console.log(`${"*".repeat(e-i)}${"^".repeat(2*i+1)}${"*".repeat(e-i)}`)
}
for (var i = 1; i < e; i++) {
    console.log(`${"*".repeat(i+1)}${"^".repeat((e-i-1)*2+1)}${"*".repeat(i+1)}`)
}


// *       *
// **     **
// ***   ***
// **** ****
// *********

const r = 5;
for (var i = 1; i <= r; i++) {
    console.log(`${"*".repeat(i)}${" ".repeat((r-i)*2+1)}${"*".repeat(i)}`)
}



//     *       *
//    ***     ***
//   *****   *****
//  ******* *******
// *****************


const t = 5;
for (var i = 0; i < t; i++) { 
    console.log(`${" ".repeat(t-i)}${"*".repeat(2*i+1)}${" ".repeat((t-i-1)*2)}${"*".repeat(2*i+1)}`)
}




//     *       *
//    ***     ***
//   *****   *****
//  ******* *******
// *****************
//  ******* *******
//   *****   *****
//    ***     ***
//     *       *

const y = 5;
for (var i = 0; i <= y; i++) {
    console.log(`${" ".repeat(y-i)}${"*".repeat(2*i+1)}${" ".repeat((y-i)*2)}${"*".repeat(2*i+1)}`)
}
for (var i = 1; i <= y; i++) {
    console.log(`${" ".repeat(i)}${"*".repeat((n-i)*2+1)}${" ".repeat(2*i)}${"*".repeat((n-i)*2+1)}`)
}


// ***** *****
//  ***** ****
// * ***** ***
// ** ***** **
// *** ***** *
// **** *****
// ***** *****

const u = 5; 
for (var i = 1; i <= u; i++) {
    console.log("*".repeat(i), "*".repeat(n), "*".repeat(n-i))
}

// *
// **
// ***
// ****
// *****
const o = 1;
for (var i = 5; i >= o; i++) {
     console.log("*".repeat(i), );
}
