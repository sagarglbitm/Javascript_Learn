// fetch has priority queue 


// call  
    // this.username=username
    // call method pass the cureent execution context to pass to another function
    // call is a method that allows you to invoke a function with a specified this context and individual arguments.
   
const person2 = {
    name: "Sagar",
  };
  
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  
  // Using call() to set `this`
  greet.call(person2, "Hello");
  
  // Output: Hello, Sagar!



// ------------------------------------------------Apply----------------------------------------------------------------------
console.log("apply")


const person = { name: 'Bob' };

function introduce(greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

// apply: apply is similar to call, but it takes an array of arguments instead of individual ones.
introduce.apply(person, ['Hi', '!']); 

// ------------------------------------------------------bind----------------------------------------------------------------


const person1 = { name: 'Charlie' };

function introduce(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
}



// bind() is a method that allows you to create a new function with a specific this value and, optionally, predefined arguments.
const greetCharlie = introduce.bind(person1);

greetCharlie('Hey'); // Output: Hey, I'm Charlie
