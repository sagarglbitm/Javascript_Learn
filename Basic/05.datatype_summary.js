// primitive

// 7 type : String,Number,Boolean,null,undefined,Symbole,BigInt

// Refrence [non-primitive]

// array,object,function

const id=Symbol("123")
const anotherId=Symbol("123")


console.log(id)
console.log(id== anotherId) // it gives false bcz symbol is uniques whetehr value is same


const heroes =["sahktiman","ironman","loki"]
 const deatils={
    name:"sagar",
    class:"10",
}

const myFunction=function(){
    console.log("hello world")
}

console.log(typeof myFunction)
console.log(typeof deatils)

//   ****************************************************************************************
// memeory 2 type- stack and heap
//               stack(primitive)  , heap(non-primitive)

// stack change the copy of the variable whereas heap change the refrence of the variable
  
let myVariable ="let's code"
 let anotherVariable=myVariable

 

 console.log(myVariable)
 console.log(anotherVariable)

 let  profile={
    email:"sagar@hcl.com",
    pass:"sagar@123"
 }
 console.log(profile)
 
 let anotherProfile= profile
  
  anotherProfile.email="manish@hcl.com"

  console.log(profile)
  console.log(anotherProfile)
  
 
