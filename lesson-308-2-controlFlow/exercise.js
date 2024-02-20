let num = -7;
if (num >= 0) {
    console.log('num is positive');
} else {
    console.log('num is negative');
    // this is not strictly true, but works with what we currently know
}

let age = 8;
if (age >= 18) {
    console.log('this user can access');
} else {
    console.log('access denied');
}

num = 20;
// num was already declared, so I am just resetting it
if (num > 0) {
    if (num > 100) {
        console.log('this is greater than 100')
    } else if (num < 100) {
        console.log('this is less than 100');
    } else {
        console.log('this was not covered, but num is 100');
    }
} else {
    console.log('the number is not positive');
}

// CHAINING
// order matters
let grade = 81;
if (grade >= 90) {
    console.log('grade is an A');
} else if (grade >= 80) {
    console.log('grade is a B');
}  else if (grade >= 70) {
    console.log('grade is a C');
} else if (grade >= 60) {
    console.log('grade is a D');
} else {
    console.log('grade is failing');
}
// what would happen if you switch the order?
