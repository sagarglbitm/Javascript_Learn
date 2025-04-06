// If you want a non-binary search (i.e., linear search) in JavaScript, you can use the following approach:

// Linear Search Implementation
// Linear search checks each element one by one until it finds the target value.


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if the target is not in the array
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearSearch([5, 15, 25, 35], 100)); // Output: -1