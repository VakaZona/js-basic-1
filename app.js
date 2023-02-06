function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function calculate(a, b, fn) {
    console.log(fn.name)
    const res = fn(a, b)
    return res
}

const res = calculate(1, 2, add)
console.log(res)

const res2 = calculate(4, 2, subtract)
console.log(res2)