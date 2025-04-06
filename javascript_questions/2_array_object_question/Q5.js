// Find union of two arrays without duplicates

function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]