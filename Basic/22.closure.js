
//  Lexical scoping means that the accessibility of variables is determined by their physical placement in the source code (the "lexical" environment).
//  In JavaScript, a function's scope is defined by where it is defined, not where it is called.

function outerFunction() {
    const outerVariable = 'I am from outer scope';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }

    innerFunction(); // Output: I am from outer scope
}

outerFunction();


// ----------------------------------------------closure-----------------------------------------

// a closure allows a function to access variables from an outer function after that outer function has finished executing.

function makeCounter() {
    let count = 0; // `count` is a private variable

    return function() {
        count += 1; // This inner function has access to `count`
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
