// 3️⃣ Check If Two Strings Are Anagrams
// An anagram means both words contain the same letters in different orders.

j
function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false