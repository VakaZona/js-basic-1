const user = {
    name: 'Vasy',
    surname: 'Pupkin',
    age: 24,
    getFullName: function() {
        return this.name + ' ' + this.surname
    }
}

function getFullName(user) {
    return user.name + ' ' + user.surname
}

console.log(user.getFullName())
const arr = [1, 2]
arr.sort()