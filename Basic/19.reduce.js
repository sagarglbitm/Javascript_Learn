

const nums=[1,2,3]

const mynums=nums.reduce(function(accumulator,currentvalue){

    console.log(`accumlator value ${accumulator} and current value is ${currentvalue}`)
    return accumulator+currentvalue
},0)

console.log(mynums)

const shoppingCart=[
    {
        itemName:"js",
        price:2999
    },
    {
        itemName:"py",
        price:999
    },
    {
        itemName:"cpp",
        price:1999
    },
]

const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total)


// Flattening an Array (Nested to Single Level)

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);

console.log(flatArray); 
// Output: [1, 2, 3, 4, 5, 6]