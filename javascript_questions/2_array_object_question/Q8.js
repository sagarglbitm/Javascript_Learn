// Easiest Sorting Method (Bubble Sort)

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// ✅ Simple but inefficient O(n²) complexity. Best for small datasets.