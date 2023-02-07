const userArray = ['Vasy', 'Pupkin', 24]
const user = {
    name: 'Vasy',
    surname: 'Pupkin',
    age: 24,
    skills: [
        'Programming',
        'Cooking'
    ],
    eduBasic: 'School 10',
    eduPro: 'MIT'
}

console.log(user)
console.log(user.name)
console.log(user.skills[0])

console.log(user['skills'])
const level = 'Pro'
console.log(user['edu' + level])

const res = prompt('Input ')
console.log(user[res])

user['city'] = 'Moscow'
console.log(user)

user.age = 30
console.log(user)