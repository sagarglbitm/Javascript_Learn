

const myDate=new Date()
console.log(myDate) // 2024-09-25T11:06:42.120Z
console.log(myDate.toString()) // Wed Sep 25 2024 16:36:42 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()) //2024-09-25T11:06:42.120Z

const myCreatedDate=new Date(2023,1,23)
console.log(myCreatedDate.toLocaleString())// 2/23/2023, 12:00:00 AM

console.log(myCreatedDate.toDateString()) //Thu Feb 23 2023
