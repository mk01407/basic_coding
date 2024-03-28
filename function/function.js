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




const n = 5
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
top_start_pattern_8(n, i);