// 7️⃣ Find the second largest number in an array

function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    if (uniqueArr.length < 2) return null; // If there's no second largest
    uniqueArr.sort((a, b) => b - a); // Sort in descending order
    return uniqueArr[1];
}

console.log(secondLargest([10, 20, 4, 45, 99, 99])); // 45
console.log(secondLargest([5])); // null