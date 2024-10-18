
{
    let a = 13; // block scope
    var b = 20; // global scope

    const c = 40
}
 // console.log(a) // it will not print a bcz let have a block scope cannot be acess outside
console.log(b)// it will  print a bcz var have a global scope can be acess outside
 // console.log(c) // it will not print a bcz const have a block scope cannot be acess outside



function one() {
    const username = "sagar"
    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // it cannot be access outside bcz it has block scope of funcn two()
    two()
}
one()


// ----------------------------------------------------------------------------------------------------


// Hoisting in JavaScript is a behavior where variable and function declarations are moved (or "hoisted") to the top of their containing 
// scope (either global or function scope) during the compilation phase, before the code is executed
console.log(add())
function add() {
    return "add"
}


// hoisting

// In this case, the variable sub is hoisted, but its value (the function) is not initialized until the assignment statement is reached
// console.log(sub())  // cannot be acees  before initialize
const sub = function () {

    return "subtract"
}


