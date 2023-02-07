const user = {
    name: 'Anton',
    id: 1,
    roles: ['Admin']
}

// const newUser = Object.assign({}, user)
// user.name = 'New user'
// console.log(user)
// console.log(newUser)

const newUser2 = {
    ...user
}
newUser2.name = 'New user'
newUser2.roles.push('User')

console.log(user)
console.log(newUser2)

