
const role = 'manager'

switch (role) {
    case 'manager':
        console.log('Manager')
        break
    case 'admin':
        console.log('Admin')
        break
    case 'ceo':
        console.log('CEO')
        break
    default:
        console.log('Anonymys')
}

switch (role) {
    case 'manager':
    case 'admin':
        console.log('No CEO')
        break
    case 'ceo':
        console.log('CEO')
        break
    default:
        console.log('Anonymys')
}

const num = 1

switch (true) {
    case num > 0:
        console.log('+')
        break
    case num < 0:
        console.log('-')
        break
    case num === 0:
        console.log('0')
        break
}