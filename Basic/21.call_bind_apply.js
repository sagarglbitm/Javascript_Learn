// fetch has priority queue 

// call 
function setUser(username){

    this.username=username

}

function createUser(username,email,pass){
    this.email=email 
    // this.username=username
    // call method pass the cureent execution context to pass to another function
    // call is a method that allows you to invoke a function with a specified this context and individual arguments.
    setUser.call(this,username)
    
    this.pass=pass
}

const finaluser=new createUser("chai","chai@","123")

console.log(finaluser)

// ------------------------------------------------Apply----------------------------------------------------------------------
console.log("apply")

function introduce(greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person = { name: 'Bob' };

// apply: apply is similar to call, but it takes an array of arguments instead of individual ones.
introduce.apply(person, ['Hi', '!']); 

// ------------------------------------------------------bind----------------------------------------------------------------

function introduce(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
}

const person1 = { name: 'Charlie' };

// bind creates a new function that, when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function
const greetCharlie = introduce.bind(person1);

greetCharlie('Hey'); // Output: Hey, I'm Charlie
