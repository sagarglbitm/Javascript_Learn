

// array use shallow copy ,means if we change something in copy array it will aslo chnage in original array ,bcz of heap
const myArr=new Array(10,23,9,24)
console.log(myArr[2])
myArr.push(80) // it add value at last place
console.log(myArr)
myArr.unshift(70)// it add 70 at first place whereas push()add at last place
console.log(myArr)
myArr.shift() // it remove the element form first place  whereas pop() remove from last place
console.log(myArr)

console.log(myArr.includes(9)) // true
console.log(myArr.indexOf(9)) // 2nd index


const myNewArray=myArr.join() // it makes a string
console.log("new ",myNewArray) 

// important points
const newArray= myArr.slice(1,3)
console.log("A",newArray) // it give value from index-1st to exclude 3rd index but never change in original array
console.log("B",myArr) // it give all value

const Arr=myArr.splice(1,3)
console.log("C",Arr) // it separate value from index-1st to  3rd index
console.log("D",myArr) //but it also chnages in original value


// ---------------------------------------------------------------------------------------------------------------------------

const marvel=[78.98,6,54,34,56]
const Dc=[34,45,44,22]
// marvel.push(Dc)
console.log(marvel)

marvel.push(Dc) // it will give [78,98,6,54,34,56,[34,45,44,22]] array in array
console.log("MARVER",marvel)

const allHeroes=[...marvel,...Dc]
console.log("spread",allHeroes)

const check=new Array(23,43,23,12,11)

console.log(Array.isArray("sagar"))

// IT MAKE  an arrayS
console.log(Array.from("sagar"))

let score1=200
let score2=300
let score3=400

console.log(Array.of(score1,score2,score3))