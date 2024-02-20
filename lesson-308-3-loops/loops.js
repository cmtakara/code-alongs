/* Types of loops that we will cover
/ for
/ for .. in
/ for .. of
/ while
/ do .. while
/ labeled statements
*/

/*
/ for loops
*/
// General syntax
// for (initialization; condition; afterthought) {
// 	statements
// }

// start with i = 0
// check if i < 10
// if it is, do the the things in {}
// then i++
// repeat starting with the check
// you will repeat until the condition is not true, so make sure there's a way to make that so
for (let i=0; i<10; i++) {
    // console.log(i);
}

// exercises
// note - when you are counting down, make sure you are changing i appropriately, and your condition makes sense
// skip the prime part of the exercise, but still print even or odd

/*
/ looping through iterables
/ for .. in
/ for .. of
*/
// what is an iterable?
// examples are strings, arrays...
const str = "Hello World";
for (let i=0; i<str.length;i++) {
    // console.log(str[i]);
}

// for .. in
// general syntax
// for (const i in _iterable_variable_)
// why might this be better?
for (const i in str) {
    console.log(str[i]);
}

// for .. of
// general syntax
// for (const _name_individual_var_ in _iterable_variable_)
// how is this different?
console.log(str);
for (const char of str) {
    console.log(char);
}

/*
/ continue
*/
for (let i=0; i<str.length;i++) {
    if (str[i] == 'l') {
        continue;
    }
    console.log(str[i]);
}

console.log('****');

// how does that look different from break?
for (let i=0; i<str.length;i++) {
    if (str[i] == 'l') {
        break;
    }
    console.log(str[i]);
}

console.log('****');

// for..in and for..of look pretty similar
for (const i in str) {
	if (str[i] == "l") {
		continue;
	}

	console.log(str[i]);
}

console.log('****');

for (const c of str) {
	if (c == "l") {
		continue;
	}

	console.log(c);
}