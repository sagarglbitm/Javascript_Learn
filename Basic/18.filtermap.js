

// ------------------------------------------Filter ----------------------------------------------
const nums = [1, 2, 3, 4, 5, 6, 7, 8]


// filter just like as for each but it chek the condition and then fretun the value whenever for-each does not
const newNums = nums.filter((nums) => nums > 4)

console.log(newNums)

const books = [

    { title: "Book One", genre: "Fiction", publish: 1981 },
    { title: "Book Two", genre: "History", publish: 1982 },
    { title: "Book Three", genre: "Economics", publish: 1983 },
    { title: "Book Four", genre: "Geography", publish: 1984 },
    { title: "Book Five", genre: "Fiction", publish: 1985 },
    { title: "Book Six", genre: "History", publish: 1986 },
    { title: "Book Seven", genre: "Economics", publish: 1987 },
    { title: "Book Eight", genre: "Geography", publish: 1988 },
]

let userBooks = books.filter((item) => item.genre === "Economics")

// checkinh multiple condition
userBooks = books.filter((item) => item.publish > 1985 && item.genre === "Economics")

console.log(userBooks)


// -------------------------------------------------Map----------------------------------------


let number = [2, 3, 4, 5]

// it will return value 
const newNumber = number.map((item) => item + 10)

console.log(newNumber)


//  chaning:multiple map used with filter also

let no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// in this after multiply by 10 it pass to second map where it added with 1 and filetr the value >50
const num = no.map((nums) => nums * 10).map((nums) => nums + 1).filter((nums) => nums > 50)

console.log(num)

