const num1 = '89103235356'
const num2 = '+70567654323'
const num3 = '+7(910) 323-53-56'
const num4 = '+7(910)2344543'
const num5 = '   +7(910) 323-53-56'

const num1Error = '89959442'
const num2Error = '+7dewf9959442'
const num3Error = '988+70953'
const num4Error =  '8910954d542'

 function isPhoneNumber(num) {
    num = num.trim()
    num = num.replace('+7', '8')
    if (!num.startsWith('8')) {
        return false
    }
    num = num.replaceAll('(', '')
    num = num.replaceAll(')', '')
    num = num.replaceAll(' ', '')
    num = num.replaceAll('-', '')
    if (num.length !=11) {
        return false
    }
    onlyNumber = true
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false
            break
        }
    }
    return onlyNumber
 }

console.log(isPhoneNumber(num1))
console.log(isPhoneNumber(num2))
console.log(isPhoneNumber(num3))
console.log(isPhoneNumber(num4))
console.log(isPhoneNumber(num5))

console.log(isPhoneNumber(num1Error))
console.log(isPhoneNumber(num2Error))
console.log(isPhoneNumber(num3Error))
console.log(isPhoneNumber(num4Error8))