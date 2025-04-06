// 4️⃣ Find intersection of two arrays

function arrayIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // [2, 3]
