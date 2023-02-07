const wallet = {
    balance: 0,
    operations: [],
    increace: function(sum, reason) {
        this.balance += sum
        this.operations.push ({
            reason: reason,
            sum: sum
        })
        return true
    },
    decrease: function(sum, reason) {
        if(this.balance < sum) {
            console.log('No money')
            return false
        }
        this.balance -= sum
        this.operations.push ({
            reason: reason,
            sum: -sum
        })
        return true
    },
    getOperationsLenght: function() {
        return this.operations.length
    }
}

console.log(wallet.increace(1000, 'ZP'))
console.log(wallet.getOperationsLenght())
console.log(wallet.decrease(2000, 'Buy macbook'))
console.log(wallet.getOperationsLenght())
console.log(wallet.decrease(500, 'Buy shop'))
console.log(wallet.balance)
console.log(wallet.operations)