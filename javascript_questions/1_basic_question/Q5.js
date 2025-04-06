

// 5️⃣ Fibonacci sequence up to n terms



function fibonacciWithoutArray(n) {
    let a = 0, b = 1;
    console.log(a);
    if (n > 1) console.log(b);

    for (let i = 2; i < n; i++) {
        let next = a + b;
        a = b;
        b = next;
        console.log(next);
    }
}

fibonacciWithoutArray(7);
