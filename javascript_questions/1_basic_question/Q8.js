// 8️⃣ Count the occurrences of each element in an array


let arr = [10, 20, 20, 30, 40, 10, 40, 40];

function counter(arr) {
    let count = {};
  arr.forEach((ele) => {
    if (count[ele]) {
      count[ele] += 1;
    } else {
      count[ele] = 1;
    }
  });
  return count
}
console.log(counter(arr));
