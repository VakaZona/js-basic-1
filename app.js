const operations = [100, -20, 7, -30 , 50]

const finalBalance = operations.reduce((acc, value, i) => {
    console.log(`${i}: acc = ${acc}, value = ${value}`)
    return acc += value
}, 0)

console.log(finalBalance)

const minElement = operations.reduce((acc, operation) => {
    if (operation > acc) {
        return acc
    } else {
        return operation
    }
}, 0)

console.log(minElement)