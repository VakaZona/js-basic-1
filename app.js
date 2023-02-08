'use strict'

console.log(this)

function addNum(num1, num2) {
    console.log(this)
    return num1 + num2
}
addNum()