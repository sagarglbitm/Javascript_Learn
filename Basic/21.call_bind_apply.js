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
// it is compulsory to write new keyword and assign inot a variable
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

// bind() is a method that allows you to create a new function with a specific this value and, optionally, predefined arguments.
const greetCharlie = introduce.bind(person1);

greetCharlie('Hey'); // Output: Hey, I'm Charlie



function setAge(age){
    this.age=age
}

function details(name, age, address){
    this.name=name,
    setAge.call(this,age)
    this.address=address
}
// it is compulsory to write new keyword and assign inot a variable
const userDetails= new details('sagar',24,'noida')
console.log(userDetails)



function profile(punctuation,excalmetry){
    console.log(`${punctuation} this ${this.name} is yours ${excalmetry}`)

}

const shipping={name:"laptop"}

 const data= profile.apply(shipping,['hi','!'])


 function date(text){
    console.log(` ${text},${this.name} `)

 }

 const shop={name:"genral store"}
 const shopDetails= date.bind(shop)

 shopDetails('it is')


