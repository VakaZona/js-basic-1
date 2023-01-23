const bmwX3Price = 100000
const forFocusPrice = 10000
const money = 20000

let message

if (money > bmwX3Price) {
    message = 'BMW X3'
} else {
    message = 'Bicycle'
}

 const str = money > bmwX3Price ? 'BMW X3' : 'Bicycle'

console.log(`I can buy ${message}`)
console.log(`I can buy ${str}`) 
console.log(`I can buy ${money > bmwX3Price ? 'BMW X3' : 'Bicycle'}`)
console.log(`I can buy ${money > bmwX3Price ? 'BMW X3' : money > forFocusPrice ? 'Ford Focus' : 'Bicycle'}`)