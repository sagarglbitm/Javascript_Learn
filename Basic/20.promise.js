

// In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and 
// its resulting value. 
// Key States of a Promise:
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation was completed successfully.
// Rejected: The operation failed.


// created
const promiseOne=new Promise(function(resolve,reject){
    // do async task
    // network call

    setTimeout(function(){
        console.log("Async Task is complete")

        // we have to connect this promise to then method for which we have to write resolve
        resolve()
    },1000)
});

// consumption

promiseOne.then(function(){
    console.log("first promise consumed")
})


// --------------------------------------------------------------------------------------------------

// both are same
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Second promise consumed")
})



// -----------------------------------------------------------------------------------------


// In this promise we passed data from resolve 
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){

        // we have psssed data in resolve
        resolve({username:"sagar",email:"sagar@hcl.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)

})

//----------------------------------------------------------------------------------------------------------------------------------

// in this promise we finally use multiple then and use of catch and finally

// create promise
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        // let error=true;
        if(!error){
            resolve({username:"sagar jha",password:"sagar@123"})
        }
        else{
            reject("Something went wrong")
        }
    },1000)
})


// handle promises with(.then,.catch,.finally)
promiseFour.then((user)=>{
    console.log(user)

    // this return is passed to the next then()
    return user.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{    // finally()is a default function
console.log("finally resolved")
})

// -------------------------------------------------------------promise.all-----------------------------------------------------------------

// Promise.all() – Run Multiple Promises in Parallel

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 Done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 Done"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 Done"), 3000));

Promise.all([p1, p2, p3]).then((results) => console.log(results));

// Output: ["P1 Done", "P2 Done", "P3 Done"] (after 3 sec)


// -------------------------------------------------------------promise.race-----------------------------------------------------------------

//Promise.race() – First Resolved or Rejected

const p4 = new Promise((resolve) => setTimeout(() => resolve("P4 Done"), 1000));
const p5 = new Promise((resolve) => setTimeout(() => resolve("P5 Done"), 2000));
const p6 = new Promise((resolve) => setTimeout(() => resolve("P6 Done"), 3000));

Promise.race([p4, p5, p6]).then((results) => console.log(results));

// Output: "P4 Done" (fastest promise resolves first)


// -------------------------------------------------------------promise.any-----------------------------------------------------------------

// Promise.any() – First Fulfilled Promise (Ignores Rejections)

const p7 = new Promise((_, reject) => setTimeout(() => reject("P7 Failed"), 1000));
const p8= new Promise((resolve) => setTimeout(() => resolve("P8 Done"), 2000));

Promise.any([p7, p8])
  .then((result) => console.log(result)) // Output: "P5 Done" (ignores P4)
  .catch((error) => console.error(error));

// ✅ Returns the first successful promise (ignores failures).



// now we hancled promise five with async and await

const promiseFive =new Promise(function(resolve,reject){

    setTimeout(function(){

        // try below both boolean
        let error=true;
        // let error=true;
        if(!error){
            resolve({username:"javascript",password:"javascript@123"})
        }
        else{
            reject("Something went wrong in javascript")
        }
    },1000)

})

async function consumePromiseFive(){
    try{
    const response=await promiseFive

    console.log(response)
    }catch(e){
        console.log(e)
    }
}

consumePromiseFive()


// fetch

// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then((response)=>{
//     return response.json()
// }).then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e)
// })