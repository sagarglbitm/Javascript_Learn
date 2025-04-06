


for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log("5 value Detected")
        // break;
        continue;
    }
    console.log("value of i ",i);
    
}


// ---------------------------- while ---------------------------------------

let val=0;
while(val<=10){
    console.log(`value of i is ${val}`)
    val=val+2;
}


// ------------------------------DO-While ------------------------------------------
  

let score=11

do {
    console.log(`value is ${score}`)

    score++;
} while (score<=10);


// -----------------------------------Forof loop -----------------------------------------

console.log("ForOf Loop")
const arr =[29,89,76,45,53,]

for (const iterator of arr) {
    console.log(iterator)
}

const greeting="Hello World !"

for (const iterator of greeting) {
    console.log(iterator)
    
}

const map =new Map();

// remove dublicate value
map.set("IN","India")
map.set("USA","United state of America")
map.set("FR","France")
map.set("IN","India")

// for of loop
for (const [key,value] of map) {
    console.log(key ,":-",value)
}

// for of is not used for object

// -----------------------------for in loop ---------------------------------------

const language={
    py:"python",
    cpp:"c++",
    js:"javascript"
}

// it will provide key 
for (const key in language) {
    console.log(` key is ${key} for value is ${language[key]}`)
}
 const programming=["js","cpp","py"]

 for (const key in programming) {

    // it will print key whether in [for of] loop it print value
    console.log(key,": ",programming[key])
 }


//  -----------------------------------------For Each Loop ------------------------------------------


// for-each is high order funcn and cannot be used break and continue statement in this loop and alos not used return
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  if (num === 3) {
    break; // ❌ SyntaxError: Illegal break statement
  }
  console.log(num);
});



const coding=["js","py","ruby","c"]

coding.forEach(function(val){
    console.log(val)
})

// by using arrow function
coding.forEach((item)=>{
    console.log(item)
})

// we can pass function of print named in for-each loop
function print (item){
    console.log(item)
}
coding.forEach(print)



// it will not return any values
coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})



// arrray of object
const myCoding=[
    {
        languageName:"javascipt",
        fileName:"js"
    },
    {
        languageName:"java",
        fileName:"java"
    },
    {
        languageName:"python",
        fileName:"py"
    }
]

myCoding.forEach((item,index,arr)=>{

    
console.log(item,"index: ",index,arr)


    
console.log(item.languageName)

})