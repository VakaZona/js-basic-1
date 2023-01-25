const users = ['Anna', 'Vika', 'Kate']

users[2] = 'Kris'
console.log(users)

users[3] = 'Nikita'
console.log(users)

const arrLength = users.push('Nikita')
console.log(users)
console.log(arrLength)

users.unshift('Vasy')
console.log(users)

const el = users.pop()
console.log(users)
console.log(el)

const el2 = users.shift()
console.log(users)
console.log(el2)