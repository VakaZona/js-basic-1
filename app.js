const input = prompt('7+15=? \n7-15=?')

switch (true) {
    case (input === 'Im not robot'):
    case (input === '22'):
    case (input === '-8'):
        console.log('Success')
        break
    default:
        console.log('You robot!')
}