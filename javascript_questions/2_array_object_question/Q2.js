

// Flattening an Array (Nested to Single Level)

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);

console.log(flatArray); 
// Output: [1, 2, 3, 4, 5, 6]