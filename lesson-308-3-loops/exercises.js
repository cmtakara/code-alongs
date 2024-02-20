// count down from 10 to 1
for (let i=10; i>0; i--) {
    console.log(i);
}

// output odd numbers from 1 to 10
for (let i=1; i<10; i+=2) {
    console.log(i);
}

// output even numbers from 1 to 10
for (let i=2; i<=10; i+=2) {
    console.log(i);
}

// output multiples of 3, starting at 6 and ending at 60
for (let i=6; i<=60; i+=3) {
    console.log(i);
}

// Output an increasing number of # symbols, from 1 to 7, as shown below.
let outString = '';
for (let i=0; i<7;i++) {
    outString = outString + '#';
    console.log(outString);
}

// Now, write a for loop that iterates from 1 to 20. The loop should:

// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.
for (let i=1; i<=20;i++) {
    if (i%2 === 0) {
        console.log(i, ' is even');
    } else {
        console.log(i, ' is odd');
    }
}