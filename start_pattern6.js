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


const n = 6;
for (var i = 0; i < n; i++) {
    
    console.log(`${"*".repeat(n-i)}${"^".repeat(2*i+1)}${"*".repeat(n-i)}`);
}

for (var i = 0; i <= n; i++) {
    console.log(`${"*".repeat(i)}${"^".repeat((n-i)*2+1)}${"*".repeat(i)}`);
}
