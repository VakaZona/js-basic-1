const balance = 1001
const bonusBalance = 99
const isBanned = false
const isExist = false
const isSelling = true

const result = isSelling && !isBanned && !isExist && (balance > 1000 || bonusBalance > 100)
console.log(`Can buy? ${result ? 'Yes' : 'No'}`)