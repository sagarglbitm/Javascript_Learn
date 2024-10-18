

function add(number1,number2){
    let result=number1+number2
    return result
}
console.log(add(2,4))

function login(username="manish"){
    if(!username){
        return "enter valid name"
    }
    return username;
}
console.log(login("sagar"))
console.log(login()) // if we did not pass argument then it print manish

// spread operator in function
function cartAmount( num1,...price){
    return {num1,price};
}

console.log(cartAmount(200,300,400)) // now we can pass multiple arg as we want

const user={
    username:"sagar",
    id:20000
}

function details(anyobject){
    return `name is ${anyobject.username} and price is ${anyobject.id} `
}

console.log(details(user))