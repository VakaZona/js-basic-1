const users = [
    {name: 'Vasy', age: 30},
    {name: 'Kate', age: 18},
    {name: 'Anna', age: 40},
    {name: 'Piter', age: 25},
]

console.log(users)
console.log(users.sort((a, b) => {
    return a.age - b.age
}))