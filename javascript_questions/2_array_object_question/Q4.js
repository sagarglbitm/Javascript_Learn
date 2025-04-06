// Convert a Simple Array into an Object with Indexes as Keys

function arrayToObject(arr) {
    let obj = {};
    arr.forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

console.log(arrayToObject(["apple", "banana", "cherry"]));
// Output: { 0: "apple", 1: "banana", 2: "cherry" }