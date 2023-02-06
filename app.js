const transactionInUSD = [10, -7, 50, -10, 100]

const transactionInRUB = transactionInUSD.map((transaction, i) => {
    console.log(i)
    return transaction * 60
})

console.log(transactionInRUB)
console.log(transactionInUSD)