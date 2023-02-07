let user = {
    name: 'vasy',
    age: 40,
    city: 'Moscow'
}

const {age, ...userWithoutAge} = user
console.log(age)
console.log(userWithoutAge)

const additionalData = {
    skills: ['Dev', 'Designer'],
    creditCard: '2345-2345-2345-2345'
}

// user.skills = additionalData.skills
// user.creditCard = additionalData.creditCard
// console.log(user)

user = {
    ...user,
    ...additionalData,
}
console.log(user)