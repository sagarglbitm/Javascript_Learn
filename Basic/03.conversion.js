let score="33a"
let value=null
console.log(typeof score)
console.log(typeof value)

//   we have changed string into a number
let scoreInNumber=Number(score)
let valueInNumber=Number(value)

//  it shows that score nw is in number format
console.log(typeof scoreInNumber)
console.log(typeof valueInNumber)

//   but when we console it gives NaN value
console.log(scoreInNumber) //NaN 
console.log(valueInNumber)//0


//  33=>nuber
// "33ab"=>Nan
// true=1


//  ********************************OPERATIONS ****************************************************

let name="sagar"
let surname="jha"
let fullName= name + surname
console.log(fullName)
 console.log(1+"2")  // 12
 console.log("1"+"2") // 12
 console.log("1"+2+2) //122
 console.log("1"-"2") // -1
 console.log("1"-2+2) //1
 console.log(1+4+"8") //58
 console.log(+true)// 1
 console.log(-true) //-1
 console.log(+"") //0
 
