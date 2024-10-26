
// ------------------------------------this------------------------------------
const user={
    username:"sagar",
    price:1000,
    greeting:function(){
        console.log( `${this.username} hello`)
        console.log(this)// it give current context of the value
        // console.log( `${username} hello`) // if we didnot use this  keyword then it always take username=sagar
    }
}

user.greeting();
user.username="manish"
user.greeting()

// this keyword is not used in function


// it is explict return thats why we need {} and if we use {} then it is need to write return keyword
const arrow=(num1,num2)=>{
    
    let username="sagar"
    console.log("arrow function")
    console.log(this.username)
    return num1+num2
}
console.log(arrow(4,5))


// it is implict function  bcz of () bracket, here it is no need to write  return keyword
const mega=(num1,num2)=>(
    num1+num2 
)         // we dont need to write return keyword if we use () bracket
console.log(mega(10,56))