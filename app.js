function logName(name, surname) {
    console.log(`My name ${name} ${surname}`)
}

logName('Anton', 'Antonov')

function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * (1 + rate / 12) ** month
    return sum
}

const example1 = countDepositSum(1000, 24, 0.12)
console.log(example1)

const example2 = countDepositSum(1000, 48, 0.10)
console.log(example2)