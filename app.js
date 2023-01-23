console.log('Vasy' || 'Oleg')
console.log(false || 'Oleg')

console.log('Vasy' && 'Oleg')
console.log(false && 'Oleg')
console.log(false && false)

let a 
let b = 'Masha'
const username = a || 'Petr'
const username2 = b || 'Petr'
console.log(username)
console.log(username2)
 
const isAdmin = true
const fileName = isAdmin && 'file.mp4'
console.log(fileName)