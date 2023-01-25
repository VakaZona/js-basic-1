const role1 = 'admin'
const role2 = 'user'
const role3 = 'superuser'

const roles = ['admin', 'user', 'superuser']
const userInfo = ['Anna', 25]
console.log(roles)
console.log(roles[0])

console.log(roles.length)
console.log(roles[roles.length - 1])

console.log(roles.at(0))
console.log(roles.at(-1))

const usersAge = [2040 - 2022, 20 - '6', 10 > 0 ? 5 : 0]
console.log(usersAge)

const userNames = new Array('Vasy', 'Petr', 'Kate')
console.log(userNames)

function square(el) {
    return el * el
}

console.log(square(5))
