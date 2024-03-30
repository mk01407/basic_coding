//     *
//    ***
//   *****
//  *******
// *********

const startPatern_2 = async (n, i) => { // function with parameters
    // Add your logic here!
    console.log("Hello world!", "startPatern_2", n, i);
    console.log(" ".repeat(n - i), "*".repeat(2 * i + 1));
    i += 1;
    if (i < n) {
        startPatern_2(n, i);
    }

}

// *********
//  *******
//   *****
//    ***
//     *

const startpatern_3 = async (n, i) => {
    console.log(" ".repeat(i + 1), "*".repeat((n - i) * 2 + 1));
    i += 1;
    if (i <= n) {
        startpatern_3(n, i);
    }
}

// *****^*****
// ****^^^****
// ***^^^^^***
// **^^^^^^^**
// *^^^^^^^^^*

const startpatern_4 = async (n, i) => {
    console.log(`${"*".repeat(n - i)}${"^".repeat(2 * i + 1)}${"*".repeat(n - i)}`);
    i += 1;
    if (i < n) {
        startpatern_4(n, i);

    }
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

// const startpatern_5 = async (n, i) => {
//     console.log(`${"*".repeat(n - i)}${"^".repeat(2 * i + 1)}${"*".repeat(n - i)}`);

//     i += 1;
//     if (i < n) {
//         startpatern_5(n, i);
//         const startpatern_5demo = async (n, i) => {
//             console.log(`${"*".repeat(i)}${"^".repeat((n - i) * 2 + 1)}${"*".repeat(i)}`);
//             i += 1;
//             if (i <= n) {
//                 startpatern_5demo(n, i);

//             }
//         }
//     }
// }


const top_start_pattern_5 = async (n, i) => {
    console.log(`${"*".repeat(n - i)}${"^".repeat(2 * i + 1)}${"*".repeat(n - i)}`);
    i += 1;
    if (i < n) {
        top_start_pattern_5(n, i);
    } else {
        bottom_start_pattern_5(n, 0);
    }
}
const bottom_start_pattern_5 = async (n, i) => {
    console.log(`${"*".repeat(i)}${"^".repeat((n - i) * 2 + 1)}${"*".repeat(i)}`);
    i += 1;
    if (i <= n) {
        bottom_start_pattern_5(n, i);
    }
}



// *       *
// **     **
// ***   ***
// **** ****
// *********

const startpatern_6 = async (n, i) => {
    console.log(`${"*".repeat(i)}${" ".repeat((n - i - 1) * 2)}${"*".repeat(i)}`);
    i += 1;
    if (i < n) {
        startpatern_6(n, i);
    }

}

//     *       *
//    ***     ***
//   *****   *****
//  ******* *******
// *****************

const startpatern_7 = async (n, i) => {
    console.log(`${" ".repeat(n - i)}${"*".repeat(2 * i + 1)}${" ".repeat((n - i - 1) * 2)}${"*".repeat(2 * i + 1)}`);
    i += 1;
    if (i < n) {
        startpatern_7(n, i);
    }
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

const top_start_pattern_8 = async (n, i) => {
    if (i < n) {
        console.log(`${" ".repeat(n-i-1)}${"*".repeat(2*i+1)}${" ".repeat((n-i-1)*2)}${"*".repeat(2*i+1)}`);
        i += 1;
       top_start_pattern_8(n,i);
    } else {
        // console.log(`${"*".repeat(n*4)}`);
        bottom_start_pattern_8(n,1);
    }
}
const bottom_start_pattern_8 = async (n, i) => {
    console.log(`${" ".repeat(i)}${"*".repeat(2*(n-i)-1)}${" ".repeat(2*i)}${"*".repeat(2*(n-i)-1)}`);
    i += 1;
    if (i < n) {
        bottom_start_pattern_8(n, i);
    }
}

// ***** *****
//  ***** ****
// * ***** ***
// ** ***** **
// *** ***** *
// **** *****
// ***** *****

const start_pattern_9 = async (n,i) => {
    console.log(`${"*".repeat(i)} ${"*".repeat(n)} ${"*".repeat(n-i)}`);
    i += 1;
    if (i <= n) {
        start_pattern_9(n,i);   
    }
}

//   *
// *****
//   *
// *****
//   *
// *****
//   *
// *****
//   *

const start_condition_pattern_1 = async (n,i) => {
    if (i%2 == 0) {
        console.log(`${" ".repeat(2)}${"*".repeat(1)}`);
    } else {
        console.log(`${"*".repeat(5)}`);
    }
    i += 1;
    if (i <= n ) {
        start_condition_pattern_1(n,i);
    }
}

//   *
//  ***
// *****
//   *
//  ***
// *****
//   *
//  ***
// *****


// Fibonacci series
// Eg (0, 1, 1, 2, 3, 5, 8, 13, 21, 34.........)

const fibonacci = (n,i) => {

    fristvalue = i;
    secondvalue = i+1;
    console.log(fristvalue);
    console.log(secondvalue);


    for (let x = 0; x <= n; x++) {
        const series = fristvalue + secondvalue
        console.log(series);
        fristvalue = secondvalue
        secondvalue =  series

    } 


}


const table = (tableOf, n) => {
    for (let x = 1; x <= n; x++ ) {
        const multiplication = x*tableOf
        console.log(`${tableOf} * ${x} = ${multiplication}`);
    }
}

// factorial program for any number
// Eg: 5 => 1*2*3*4*5 = 120
// Eg: 4 => 1*2*3*4 = 24
// Eg: 3 => 1*2*3 = 6

const factorial = (factorialof , n) => {
    fristvalue = i;
    secondvalue = i+1;
    console.log(fristvalue);
    console.log(secondvalue);

    for (let x = 1; x <= n; x++) {
        const factorial = x * factorialof
        console.log(factorial)
        fristvalue = secondvalue
        secondvalue = factorial
    }
       
}







const n = 6
const i = 0
// how we can call function
// startPatern_1_demo();
// startPatern_1(n,i);
// startPatern_2(n,i)
// startpatern_3(n,i);
// startpatern_4(n,i);
// top_start_pattern_5(n, i);
// startpatern_6(n,i);
// startpatern_7(n,i);
// top_start_pattern_8(n, i);
// start_pattern_9(n,i);
// start_condition_pattern_1(n,i); 

// fibonacci(n,i);
// table(8, 10);
factorial (5,n);