
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


// in this promise we finally use multiple then and use of catch and finally

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