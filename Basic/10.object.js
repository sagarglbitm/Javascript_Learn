
const mySymbol=Symbol("key1")
const profile={
    name:"Sagar",
    [mySymbol]:"key2",
    age:10,
    isLoggedIn:true,
    lastLoginDays:["mon","tue","wed"]

}

console.log(profile[mySymbol])
console.log(profile)
console.log(Object.keys(profile))// it gives all the keys
console.log(Object.values(profile))// it gives all the values

profile.greeting=function(){
    console.log("Hello greeting")
}
console.log(profile.greeting())

profile.greeting2=function(){
    console.log(`Hello greeting ${this.name}`)
}
console.log(profile.greeting2())


const regular={
    name:{
        fullname:{
            firstname:"manish",
            lastname:"kumar"
        }
    }
}

console.log(regular.name)
console.log(regular.name.fullname)


const arryOfObj=[
    {
        name:"pankaj",
        class:12
    },
    {
        name:"sanjay",
        class:11
    },
    {
        name:"samay",
        class:10
    }

]

console.log(arryOfObj[1].name) //sanjay

const ob1={
    1:"a",
    2:"b",
    3:"c"
}

const ob2={
    4:"d",
    5:"e",
    6:"f"
}

// make one object by suing two different object
const ob3=Object.assign(ob1,ob2)
const ob4={...ob1,...ob2}// concat two object by spread operator
console.log(ob3)
console.log(ob4)
