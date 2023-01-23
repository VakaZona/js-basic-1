const startDeposit = 12000
const procent = 0.07
const timeMouth = 24

const endDeposit = startDeposit * (1 + procent / 12) ** timeMouth
console.log(`Deposit End ${endDeposit}`)

if (endDeposit > 13500) {
    console.log('Yes')
} else {
    console.log('No')
}

