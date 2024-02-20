/*
/   Scope will be covered more thoroughly shortly, but in order to 
/   talk about code blocks...
/   scope defines where variables and functionality can be accessed
*/

/*
/   Code Blocks
*/
//  These describe chunks of code that are within the same scope
//  Usually delimited by a pair of curly braces
//  Usually combined with other JS functionality like conditionals or functions or loops

// because these are at the top level of the script, they are valid at all levels of the script

let x = 10;
let y = 5;
console.log("x is : ", x, " y is : ", y);

{
    let z = x + y;
    console.log("x is : ", x, " y is : ", y);
    console.log(z);
}

console.log("x is : ", x, " y is : ", y);
// Notice the error when the one below is used.  
// What does it say?
// console.log("x is : ", x, " y is : ", y, " and z is: ", z);

/*
/   =============== Scope ===============
/   Global Scope - valid everywhere - but we want to avoid this because 
/       it creates the potential for uninitentionally overwriting things
/   Module Scope - we'll learn more about this later
/   Function Scope - we'll learn more about this later
/   Block Scope - valid only within the BLOCK OF CODE that it was created in
/       {}
*/

// This code from the notes was modified from mdn code that can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// note that I had to change the variable name from x to ex because I had already declared a variable called x
// look at the error that you get if you keep that x variable name
// ----- NOTE -----
// we are using {} to demonstrate how scope works, but it is more meaningful when used with
//      conditionals, loops, functions...
{
    var ex = 1;
    {
        var ex = 2;  // same variable!
        console.log(ex);  // 2
    }
    console.log(ex);  // 2
}

{
    let ex = 1;
    {
        let ex = 2;  // different variable
        console.log(ex);  // 2
    }
    console.log(ex);  // 1
}

/*
/ Control Flow and Conditionals
/   Look at images in notes 
*/
// if () {}
// if () {} else {}
// what is the difference?
// remember = is assignment and == and === are both checking for equality
// you do NOT need the {} if there is only one line, BUT you DO need it any time there is more than one line
// it can also help with readability as you are learning to have {}
x = 110;
console.log('if but not else');
if (x==10) {
    console.log('x is 10');
}
console.log('i always print');

console.log('if with else');
if (x==10) {
    console.log('x is 10');
} else {
    console.log('i only print when x is NOT 10');
}
console.log('i always print');

/*
/ "Truthy" and "Falsy"
/   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
/   https://developer.mozilla.org/en-US/docs/Glossary/Falsy
/   https://www.w3schools.com/js/js_booleans.asp
*/
// Why would I want to use this?

// To check if my variable exists and is initialized
// if (newVar) {
//     console.log('do things with newVar');
// } else {
//     console.log('this is not defined');
// }

let newVar;
if (newVar) {
    console.log('do things with newVar');
} else {
    console.log('this is not defined');
}

newVar = 10;
if (newVar) {
    console.log('do things with newVar');
} else {
    console.log('this is not defined');
}

// Exercise

/*
/ Nested if/else
/   Look at images in notes 
*/
// NESTING
let hungry = true, hasGroceries = true;
if (hungry) {
    console.log('i should eat');
    if (hasGroceries) {
        console.log('make food');
    } else {
        console.log('buy food');
    }
} else {
    console.log("i won't eat right now");
}

// CHAINING
// order matters
let temp = 0;
if (temp >= 100) {
    console.log('temp boiling');
} else if (temp >= 50) {
    console.log('temp is hot');
}  else if (temp >= 25) {
    console.log('temp is warm');
} else if (temp >= 0) {
    console.log('temp above freezing');
} else {
    console.log('temp is freezing');
}
// what would happen if you switch the order?

// Exercises

/*
/ Switch statements
*/
x = 5;
y = 4;
let operand = "*";
switch (operand) {
   case "+":
       console.log(x + y);
       break;
   case "-":
       console.log(x - y);
       break;
   case "*":
       console.log(x * y);
       break
   case "/":
       console.log(x / y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}

/*
/ Ternary Operators
*/
// General syntax:
// (conditional) ? (value_if_true) : (value_if_false)
// the following sets of statements are functionally the same
x = 10;
let isTen;

if (x == 10) {
	isTen = true;
} else {
	isTen = false;
}

x = 10;
isTen = x == 10 ? true : false;


/*
/ Errors
*/
// read about errors in the notes
// Syntax errors (code stops and error is shown) versus Logic errors (code runs but not how you expect it to)

/*
/ Try/Catch
*/
// we will spend more time on this later
x = 10;

try {
	if (x < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
} catch (error) {
	console.log(error);
}

console.log("Does this log?");

x = 10;

try {
	if (x > 0) {
		let isEven = (x % 2 == 0) ? true : false;
	} else if (x <= 0) {
		throw "Error - Value of 0 or below.";
	}

	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(x);
}

/*
/ Break, Continue, Return
*/
// break gets out of the loop or switch or conditional completely
// continue moves to the next iteration of a loop
// return goes with functions, and we will learn more about it when we learn about functions