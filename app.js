const operations = [1000, -700, 300, -500, 10000]
const balance = 100

function AvarageOperations (opertaions) {
    let income = 0
    let countIncome = 0
    let expenses = 0
    let countExpenses = 0
    for (let item of operations) {
        if (item >= 0) {
            income += item
            countIncome ++
        } else {
            expenses += item
            countExpenses --
        }
        
    }
    console.log(`Avarage income ${income / countIncome}`)
    console.log(`Avarage expenses ${expenses / countExpenses}`)
}

function CheckOperation(balance, operation) {
    if (balance <= operation) {
        return true
    } else {
        return false
    }
}

function FinishBalance (balance, operations) {
    let finishBalance = balance
    for (let item of operations) {
        finishBalance += item
        if (CheckOperation(finishBalance, item)) {
            return console.log('operation false')
            break
        }
        
    }
    return finishBalance
}

FinishBalance(balance, operations)
console.log(`Finish balance: ${FinishBalance(balance, operations)}`)
AvarageOperations(operations)