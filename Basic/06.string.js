const gameName= new String("samgar")
console.log(typeof gameName)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('g'))

const newString=gameName.substring(1,3)
console.log(newString)
const anotherString=gameName.slice(2,-1)
console.log(anotherString)

const mainSting="     sagar    "
console.log(mainSting)
console.log(mainSting.trim()) // it remove the spaces 

const url ="sagar.jha@hcl.com"
console.log(url.replace('@hcl','@gmail'))
console.log(url.includes('@hcl'))
console.log(url.split('.'))