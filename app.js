const userData = ['Anton', 18, 'Moscow']

function getData() {
    return ['Anton', 18, 'Moscow']
}
// const userName = userData[0]
// const age = userData[1]
// const city = userData[2]
// console.log(userName, age, city)

const [userName, age, city] = getData()
console.log(userName, age, city)

const [userName2, age2] = userData
console.log(userName2, age2)

const [userName3, _, city3] = userData
console.log(userName3, city3);
