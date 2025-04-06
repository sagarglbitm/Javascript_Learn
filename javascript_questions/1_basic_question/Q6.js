

// 6️⃣ Remove duplicates from an array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


// Without using Set:


function removeDuplicatesManual(arr) {
    let unique = [];
    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    return unique;
}

console.log(removeDuplicatesManual([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]