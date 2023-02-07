const users = [
    {
        name: 'Vasy',
        surname: 'Pupkin',
        age: 30,
        skills: ['DevOps', 'Developer']
    },
    {
        name: 'Kate',
        surname: 'Belova',
        age: 18,
        skills: ['Designer']
    },
]

const userData = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length

    }
})

console.log(userData)