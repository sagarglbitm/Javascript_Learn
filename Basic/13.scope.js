
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

console.log(add())
function add() {
    return "add"
}


// hoisting
// console.log(sub())  // cannot be acees  before initialize
const sub = function () {

    return "subtract"
}


