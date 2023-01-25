const roles = ['user', 'admin', 'manager']

const elIndex = roles.indexOf('admin')
console.log(elIndex)

const el2Index = roles.indexOf('superadmin')
console.log(el2Index)

if (roles.indexOf('admin') >= 0) {
    console.log('Success')
}

console.log(roles.includes('admin'))
console.log(roles.includes('superadmin'))

if (roles.includes('admin')) {
    console.log('Success')
}