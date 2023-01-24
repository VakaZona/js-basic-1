function creditPotencial(age, isWork) {
    if (age > 24 && isWork) {
        return 500
    } else if (age > 24 && !isWork) {
        return 100
    }
    return 0
}

function creditMacBook(age, isWork, money) {
    if (money >= 2000) {
        return 'Yes'
    } else {
        money += creditPotencial(age, isWork)
        if (money >= 2000) {
            return 'Yes'
        } else {
            return 'No'
        }
    }
    
}

console.log(creditMacBook(25, 1, 1500))