
// Write a function to check if a string is a palindrome.

// by built-in method


console.log("by built-in")
function isPalindrome(str) {

    
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false



// by loop

console.log("without built-in")
function isPalindromeManual(str) {

    
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindromeManual("racecar")); // true
console.log(isPalindromeManual("world")); // false